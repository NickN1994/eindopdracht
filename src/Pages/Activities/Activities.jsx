import {useEffect, useState} from "react";

import axios from "axios";
import ActivityBox from "./components/ActivityBox.jsx";
import {toast} from "react-toastify";


function Activities() {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
                    {signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }});
                setActivity(result.data);
                console.log(result.data);
            } catch (e) {
                if (e.code === "ERR_CANCELED") {
                    // console.log("Verzoek is geannuleerd:", e.message);
                } else {
                    // Het is een echte fout
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
                {activity.length > 0 && activity.map((activity) => {
                    return (
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
                    )
                })}
            </div>
        </div>
    )
}

export default Activities;