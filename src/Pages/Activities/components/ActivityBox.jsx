import infoShort from "../../../helpers/infoShort.js";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/AuthContext.jsx";
import "../Activites.css"
import axios from "axios";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";
import "../Activites.css"
import formatDate from "../../../helpers/formatDate.js";

// eslint-disable-next-line react/prop-types
function ActivityBox({id, name, participants, teacher, date, time, activityInfo}) {
    const {admin} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [availableSpots, setAvailableSpots] = useState(0);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        async function fetchData () {
            const abortController = new AbortController();
            const token = localStorage.getItem('token');
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:8080/${id}/available-spots`,
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                setAvailableSpots(response.data);
                if (availableSpots === 0) {
                    setDisabled(true);
                }
            } catch (e) {
                console.error(e, "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Beschikbare plekken niet opgehaald.");
            } finally {
                setIsLoading(false);
            }
            return () => abortController.abort();
        }

        fetchData();
    }, [id]);

    async function subscribe(){
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.sub;
        try {
            setIsLoading(true);
            const response = await axios.post(
                "http://localhost:8080/subscribe",
                {
                    userId: userId,
                    activityId: id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }});
            toast.success("Aanmelding is voltooid.")
            console.log(response.data);
        } catch (e) {
            console.error(e + "Het is niet gelukt om de je aan te melden.");
            toast.error("Het is niet gelukt om de je aan te melden.")
        } finally {
            setIsLoading(false);
        }
    }


    return (


        <div className='activity-box'>

            <h2>{name}</h2>
            <h3>Op {date ? formatDate(date) : 'Laden...'} {time}</h3>
            <p>Aantal plekke beschikbaar: {availableSpots}</p>
            <p>Totaal aantal plekken: {participants}</p>
            <p>Begeleider: {teacher}</p>
            <p>{infoShort(activityInfo)}...</p>

                {admin ?

                        <Link to={`/activiteiten/${id}`} className="btn btn-orange">Activiteit bewerken</Link>
                    :
                    <div className="btn-box">
                        <Link to={`/activiteiten/${id}`} className="btn btn-orange">Meer informatie</Link>

                        <button type="button" onClick={subscribe} className="btn btn-purple" disabled={disabled}>Inschrijven</button>

                        {isLoading && (
                            <div className="loader">
                            </div>
                        )}
                    </div>
                }
        </div>
    )
}

export default ActivityBox;