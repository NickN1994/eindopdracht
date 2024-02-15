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
    const [availableSpots, setAvailableSpots] = useState(0);
    const [isSubscribed, setIsSubscribed] = useState(false);
    // const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);

        // Roep beide functies aan bij component mount
        fetchAvailableSpots();
        fetchSubscriptionStatus();

        return () => abortController.abort();
    }, [id, isSubscribed]);


    async function fetchAvailableSpots () {
        const token = localStorage.getItem('token');
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/${id}/available-spots`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
            setAvailableSpots(response.data);

        } catch (e) {
            console.error(e, "Het is niet gelukt om de data op te halen.");

        } finally {
            setIsLoading(false);
        }
    }

    async function fetchSubscriptionStatus() {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;
        try {
            const subscriptionResponse = await axios.get(`http://localhost:8080/subscribe/${username}/activities/${id}/is-subscribed`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIsSubscribed(subscriptionResponse.data);
        } catch (e) {
            console.error(e, "Het is niet gelukt om de data op te halen.");
        }
        finally {
            setIsLoading(false);
        }
    }

    async function subscribe() {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;
        try {
            setIsLoading(true);
            await axios.post("http://localhost:8080/subscribe", {
                userId: username,
                activityId: id
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Aanmelding is voltooid.");
            setIsSubscribed(true);
        } catch (e) {
            console.error("Inschrijven mislukt.", e);
            toast.error("Inschrijven mislukt.");
        } finally {
            setIsLoading(false);
        }
    }

    async function unsubscribe() {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        try {
            const subscribeResponse = await axios.get(
                `http://localhost:8080/subscribe/user/${username}/activity/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const subscribeId = subscribeResponse.data;

            await axios.delete(`http://localhost:8080/subscribe/${subscribeId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Uitschrijving voltooid.");
            setIsSubscribed(false);

        } catch (error) {
            console.error("Er is een fout opgetreden tijdens het uitschrijven.", error);
            toast.error("Uitschrijven mislukt. Probeer het later opnieuw.");
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

                        {!isSubscribed ?
                            <button type="button" onClick={subscribe} className="btn btn-purple" >Inschrijven</button>
                            :
                        <button type="button" onClick={unsubscribe} className="btn btn-purple" >Uitschrijven</button>
                        }

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