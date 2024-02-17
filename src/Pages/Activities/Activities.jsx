import {useEffect, useState} from "react";

import axios from "axios";
import ActivityBox from "./components/ActivityBox.jsx";
import {toast} from "react-toastify";


function Activities() {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        async function fetchData() {
            try {
                setIsLoading(true);
                const result = await axios.get(
                    "http://localhost:8080/activities",
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                setActivity(result.data);

            } catch (e) {
                if (e.code === "ERR_CANCELED") {
                    // een fout
                } else {

                    console.error(e, "Het is niet gelukt om de data op te halen.");
                    toast.error("Er is iets misgegaan. Probeer opnieuw.");
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            // console.log("Clean up");
            abortController.abort();
        };
    }, []);


    return (
        <div className="outer-container">
            <div className="inner-container">
                {isLoading && (
                    <div className="loader">
                    </div>
                )}

                <h1>Activiteiten</h1>
                <input
                    type="text"
                    placeholder="Zoek een activiteit op naam"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="parent-activity-box">
                    {activity
                        .filter((activity) =>
                            activity.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .sort((a, b) => new Date(a.date) - new Date(b.date))
                        .map((activity) => (
                            <ActivityBox
                                key={activity.id}
                                id={activity.id}
                                name={activity.name}
                                participants={activity.participants}
                                teacher={activity.teacher}
                                date={activity.date}
                                time={activity.time}
                                activityInfo={activity.activityInfo}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Activities;