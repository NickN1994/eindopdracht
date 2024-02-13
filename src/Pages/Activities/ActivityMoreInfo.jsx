import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {jwtDecode} from "jwt-decode";
import formatDate from "../../helpers/formatDate.js";


function ActivityMoreInfo() {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const {id} = useParams();
    const [activities, setActivities] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [deleteCheck, setDeleteCheck] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const {admin} = useContext(AuthContext);

    useEffect(() => {
        async function fetchActivity() {
            const abortController = new AbortController();
            const token = localStorage.getItem('token');
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:8080/activities/${id}`, {
                    signal: abortController.signal,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setActivities(response.data);

                setValue('name', response.data.name);
                setValue('participants', response.data.participants);
                setValue('teacher', response.data.teacher);
                setValue('date', response.data.date);
                setValue('time', response.data.time);
                setValue('activityInfo', response.data.activityInfo);
            } catch (e) {
                console.error(e, "Het is niet gelukt om de data op te halen.");
                setError(true);
                toast.error("Er is iets misgegaan. Ververs de pagina.");
            } finally {
                setIsLoading(false);
            }
            return () => abortController.abort();
        }

        fetchActivity();
    }, [id, setValue]);


    async function onSubmit(data) {
        const token = localStorage.getItem('token');
        setIsLoading(true);

        try {
            const response = await axios.put(`http://localhost:8080/activities/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                toast.success("Activiteit is bijgewerkt");
                navigate("/activiteiten");
            }
        } catch (error) {
            toast.error("Er is iets misgegaan bij het bijwerken van de activiteit");
            console.error("Er is iets misgegaan bij het bijwerken van de activiteit", error);
        } finally {
            setIsLoading(false);
        }
    }


    async function deleteActivity(id) {
        setIsLoading(true)
        try {
            await axios.delete(`http://localhost:8080/activities/${id}`);
            toast.success("Activiteit is verwijderd");
            navigate("/activiteiten");
        } catch (error) {

            if (error.response && error.response.status === 404) {
                toast.error("Activiteit niet gevonden");
            } else {
                toast.error("Er is een probleem opgetreden bij het verwijderen");
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function subscribe() {
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
                    }
                });
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
        <div className="outer-container">
            <div className="inner-container">
                {isLoading && (
                    <div className="loader">
                        Loading...
                    </div>
                )}

                {admin ?

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">Naam Activiteit</label>
                        <input id="name" {...register('name')} />
                        {errors.name && <p>{errors.name.message}</p>}

                        <label htmlFor="participants">Aantal deelnemers</label>
                        <input id="participants" {...register('participants')} />
                        {errors.participants && <p>{errors.participants.message}</p>}

                        <label htmlFor="teacher">Begeleider</label>
                        <input id="teacher" {...register('teacher')} />
                        {errors.teacher && <p>{errors.teacher.message}</p>}

                        <label htmlFor="date">Datum</label>
                        <input id="date" type="date" {...register('date')} />
                        {errors.date && <p>{errors.date.message}</p>}

                        <label htmlFor="time">Tijd</label>
                        <input id="time" {...register('time')} />
                        {errors.time && <p>{errors.time.message}</p>}

                        <label htmlFor="activityInfo">Activiteit Informatie</label>
                        <textarea id="activityInfo" {...register('activityInfo')} />
                        {errors.activityInfo && <p>{errors.activityInfo.message}</p>}

                        <button type="submit">Opslaan</button>
                        <button type="button"><Link to={"/activiteiten"}>Annuleren</Link></button>

                        <button onClick={() => setDeleteCheck(true)}>Activiteiten verwijderen</button>
                        {deleteCheck &&
                            <div>
                                <button type="button" onClick={() => deleteActivity(activities.id)}>Klik hier om
                                    definitief
                                    te verwijderen
                                </button>
                                <button onClick={() => setDeleteCheck(false)}>Annuleren</button>
                            </div>}
                    </form>

                    :

                    <div className="activity-info-box">
                        <h1>{activities.name}</h1>
                        <h3>{activities.date ? formatDate(activities.date) : 'Laden...'} {activities.time}</h3>
                        <p>Aantal plekke beschikbaar: </p>
                        <p>Totaal aantal plekken: {activities.participants}</p>
                        <p>Begeleider: {activities.teacher}</p>
                        <p>{activities.activityInfo}</p>

                        <div className="btn-grp">
                            <button type="button" onClick={subscribe} className="btn-subscribe">Inschrijven</button>
                            <Link to={"/contact"} className="btn">Heb je nog vragen? Klik hier om contact met ons op te
                                nemen</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ActivityMoreInfo;