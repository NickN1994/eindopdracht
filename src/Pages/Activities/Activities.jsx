import {useEffect, useState} from "react";

import axios from "axios";
import ActivityBox from "./components/ActivityBox.jsx";
import {toast} from "react-toastify";


function Activities() {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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
                // console.log("Gelukt");
                // console.log(result.data);
                setActivity(result.data);
            } catch (e) {
                // console.error(e + "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Er is iets misgegaan. Probeer opnieuw.")
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

    // async function updateActivity(id, updatedActivity) {
    //     try {
    //         const response = await axios.put(`http://localhost:8080/activities/${id}`, updatedActivity);
    //         if (response.status === 200) {
    //             toast.success("Activiteit is bijgewerkt");
    //
    //             setActivity((prevActivities) =>
    //                 prevActivities.map((activity) =>
    //                     activity.id === id ? { ...activity, ...updatedActivity } : activity
    //                 )
    //             );
    //         }
    //     } catch (error) {
    //         toast.error("Er is iets misgegaan bij het bijwerken van de activiteit");
    //         console.error("Er is iets misgegaan bij het bijwerken van de activiteit", error);
    //     }
    // }

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