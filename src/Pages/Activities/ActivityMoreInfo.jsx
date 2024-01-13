import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";



function ActivityMoreInfo () {

    const {id} = useParams();
    const [activities, setActivities] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // axios get functie maken om de de activiteiten op te halen, daarvoor staat die activity.find voor

    useEffect(() => {
        const abortController = new AbortController();
        async function fetchActivity () {
            try {
                setIsLoading(true);
                setError(false);
                const response = await axios.get(`http://localhost:8080/activities/${id}`,
                    {signal: abortController.signal});
                console.log("Gelukt");
                console.log(response.data);
                setActivities(response.data);
            } catch (e) {
                console.error(e + "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Er is iets misgegaan. Ververs de pagina.")
            } finally {
                setIsLoading(false);
            }
        }
        fetchActivity();
        return () => {
            console.log("Clean up");
            abortController.abort();
        };
        
    }, [id]);


    // OVERBODIG ?
    const result = activities.find((activity) => {
        if (id ===activity.id.toString()) {
            return activity;
        }
    })

    return (
        <div className="outer-container">
            <div className="inner-container">
                {isLoading && (
                    <div className="loader">
                        Loading...
                    </div>
                )}
                <h3>{result.name} {result.date} {result.time}</h3>
                {/*     HIER NOG EEN HELPER MAKEN VOOR PLEKKEN VRIJ TE BEREKENEN    */}
                <p>Aantal plekken vrij: {result.participants}</p>
                <p>Begeleider: {result.teacher}</p>
                <p>{result.activityInfo}</p>

                <div>
                    {/*HIERONDER BIJ DE BUTTON NOG EEN NAVIGATE TOEVOEGEN OF EEN SUCCES POPUPMELDING EN WANNEER MEN IS INGESCHREVEN KNOP
                    VERANDEREN NAAR UITSCHRIJVEN. Voor aanmelding moet nog een post async functie */}
                    {/*<button type="button"><Link to={}>Inschrijven</Link></button>*/}
                    <button type="button">
                        {/*<Link to={"/contact"}>Heb je nog vragen? Klik hier om contact met ons op te nemen</Link>*/}
                    </button>
                {/*    Hieronder de knop voor de admins om een activiteit te wijzigen*/}
                    <button type="button">Activiteit aanpassen</button>
                </div>

            </div>
        </div>
    )
}

export default ActivityMoreInfo;