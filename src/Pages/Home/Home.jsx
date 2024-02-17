import './Home.css'
import fotoHome from './Assets/VanuitHartenZiel0-aangepast-10-1-scaled.jpg'
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";
import {Link} from "react-router-dom";
import ActivityBox from "../Activities/components/ActivityBox.jsx";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const [activityList, setActivityList] = useState([]);


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:8080/users/${username}`,
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                setUserData(response.data)

            } catch (e) {
                // toast.error("Er is iets misgegaan. Ververs de pagina.")

            }
            try {
                setIsLoading(true);
                const activityResponse = await axios.get(`http://localhost:8080/subscribe/user/${username}`,
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                setActivityList(activityResponse.data)

            } catch (e) {
                if (activityList === null) {
                    console.error("geen activiteiten gevonden.")
                }

            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            abortController.abort();
        };

    }, []);

    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    {isLoading && (
                        <div className="loader">
                        </div>
                    )}

                    <div className="colums">

                        <section className="colum-one">
                            <h1>Welkom {userData.name}</h1>
                            <p>Leuk dat je hier bent. In deze omgeving vind je alles terug wat je nodig hebt voor je
                                persoonlijke reis bij Het Land van Licht.
                                Ga naar Activiteiten om jezelf in te schrijven voor een activiteit. Kan je na
                                inschrijving toch niet? Dan kun je met één druk op knop jezelf weer uitschrijven.
                                Om te zien voor elke activiteiten jij ingeschreven staat, vind je onderaan deze
                                pagina.</p>

                            <p>Ga naar de pagina leeromgeving om de meditaties van Het land van Licht te ontdekken die
                                je onder andere op de locatie van het Land van Licht kan doen.
                                Daarnaast vind je hier ook de meditaties en oefeningen die horen bij het Spel des
                                Levens.</p>

                            <p>Mocht je vragen hebben, dan kan je via het contact formulier contact opnemen. Is het
                                dringend? Dan zijn we ook via Whatsapp te bereiken.</p>

                            <p>Fijne reis, Nick & Kirstie.</p>

                        </section>

                        <section className="colum-two">
                            <figure className='colum-two'>
                                <img src={fotoHome} alt="Afbeelding Nick en Kirstie"/>
                            </figure>
                        </section>
                    </div>
                </div>
            </div>
            <div className="outer-container">
                <div className="inner-container">
                    <h2>Je staat ingeschreven voor deze activiteiten</h2>
                    <div className="parent-activity-box">
                        {activityList ?
                            activityList.map((activity) => (
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
                            ))
                            :
                            <div>
                                <p>Je bent nergens voor ingeschreven.</p>
                                <Link to={"/activiteiten"} className="btn btn-orange">Klik hier voor activiteiten</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>


    )
}

export default Home;