import {useEffect, useState} from "react";

import axios from "axios";
import ActivityBox from "./components/ActivityBox.jsx";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";


function Activities() {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    // {
    //     "name" : "Lichtcirkel",
    //     "participants" : 8,
    //     "teacher" : "Kirstie",
    //     "date" : "2024-01-09",
    //     "time" : "van 10u tot 16u",
    //     "activityInfo" : "deze activiteitje is heel leuk en je gaat lekker chillen"
    // }

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
                // console.log(result.data);

                // const subscriptionResponse = await axios.get(`http://localhost:8080/subscribe/${username}/activities/${activity.id}/is-subscribed`, {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // });
                // setIsSubscribed(subscriptionResponse.data);
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