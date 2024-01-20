import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ActivityBox from "./components/ActivityBox.jsx";
import {toast} from "react-toastify";


function Activities () {

    const [activity, setActivity] = useState([]);
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

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
        async function fetchData () {
            try {
                setIsLoading(true);
                setError(false);
                const result = await axios.get(
                    "http://localhost:8080/activities",
                    {signal: abortController.signal});
                console.log("Gelukt");
                console.log(result.data);
                setActivity(result.data);
            } catch (e) {
                console.error(e + "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Er is iets misgegaan. Probeer opnieuw.")
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            console.log("Clean up");
            abortController.abort();
        };
    }, []);

    return (
        <div className="outer-container">
            <div className="inner-container">
                {activity && activity.map((activity) => {
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