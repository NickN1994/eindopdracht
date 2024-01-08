import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ActivityBox from "./ActivityBox.jsx";


function Activities () {

    const [activity, setActivity] = useState([]);
    const {id} = useParams();

    // {
    //     "name" : "Lichtcirkel",
    //     "participants" : 8,
    //     "teacher" : "Kirstie",
    //     "date" : "2024-01-09",
    //     "time" : "van 10u tot 16u",
    //     "activityInfo" : "deze activiteitje is heel leuk en je gaat lekker chillen"
    // }

    useEffect(() => {
        async function fetchData () {
            try {
                const result = await axios.get("http://localhost:8080/activities");
                console.log("Gelukt");
                console.log(result.data);
                setActivity(result.data);
            } catch (e) {
                console.error(e + "Het is niet gelukt om de data op te halen.");
            }
        }
        fetchData()
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