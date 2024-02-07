import './Home.css'
import fotoHome from './Assets/VanuitHartenZiel0-aangepast-10-1-scaled.jpg'
import ActivityBox from "../../Compenents/ActivityBox.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        async function fetchName() {
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

                console.log("Gelukt");
                console.log(response.data);

            } catch (e) {

                if (axios.isCancel(e)) {
                    console.log('Aanvraag geannuleerd:', e.message);
                } else {

                    console.error(e + " Het is niet gelukt om de data op te halen.");
                    setError(true);
                    toast.error("Er is iets misgegaan. Ververs de pagina.")
                }

            } finally {
                setIsLoading(false);
                setError(false);
            }
        }

        fetchName();
        return () => {
            console.log("Clean up");
            abortController.abort();
        };

    }, []);

    return (

            <div className='outer-container'>
                <div className='inner-container colums'>
                    {isLoading && (
                        <div className="loader">
                        </div>
                    )}

                    <section className='colum-one'>
                        <h1>Welkom {userData.name}</h1>
                        {/*<ActivityBox/>*/}

                    </section>


                    <figure className='colum-two'>
                        <img src={fotoHome} alt="Afbeelding Nick en Kirstie"/>
                    </figure>
                </div>
            </div>


    )
}

export default Home;