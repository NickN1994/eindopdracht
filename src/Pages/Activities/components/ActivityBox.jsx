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
    const [subscribeId, setSubscribeId] = useState(null);
    // const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        async function fetchData () {
            const abortController = new AbortController();
            const token = localStorage.getItem('token');
            const decodedToken = jwtDecode(token);
            const username = decodedToken.sub;
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
            } catch (e) {
                console.error(e, "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Beschikbare plekken niet opgehaald.");
            }
            // try {
            //     const subIdResponse = await axios.get(`http://localhost:8080/subscribe/user/${username}/activity/${id}`, {
            //         headers: {Authorization: `Bearer ${token}`},
            //     });
            //     setSubscribeId(subIdResponse.data);
            // } catch (e) {
            //     console.error("Subscribe ID niet gevonden.", e);
            //     setSubscribeId(null);
            // }
            finally {
                setIsLoading(false);
            }
            return () => abortController.abort();
        }

        fetchData();
    }, [id]);

    // async function subscribe(){
    //     const token = localStorage.getItem('token');
    //     const decodedToken = jwtDecode(token);
    //     const userId = decodedToken.sub;
    //     try {
    //         setIsLoading(true);
    //         const response = await axios.post(
    //             "http://localhost:8080/subscribe",
    //             {
    //                 userId: userId,
    //                 activityId: id
    //             },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     'Content-Type': 'application/json'
    //                 }});
    //         toast.success("Aanmelding is voltooid.")
    //         console.log(response.data);
    //     } catch (e) {
    //         console.error(e + "Het is niet gelukt om de je aan te melden.");
    //         toast.error("Het is niet gelukt om de je aan te melden.")
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

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

            // const response = await axios.get(`http://localhost:8080/subscribe/user/${username}/activity/${id}`, {
            //     headers: { Authorization: `Bearer ${token}` },
            // });
            // setSubscribeId(response.data);
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
        const username = decodedToken.sub; // Zorg ervoor dat dit de gebruikersnaam is, zoals verwacht door je backend.

        try {
            // Eerst het subscribeId ophalen
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
            // Mogelijk hier een state update om de UI te refreshen en te reflecteren dat de gebruiker niet langer ingeschreven is
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

                        <button type="button" onClick={subscribe} className="btn btn-purple" >Inschrijven</button>

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