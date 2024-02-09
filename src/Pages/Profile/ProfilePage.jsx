import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {AuthContext} from "../../Context/AuthContext.jsx";
import {jwtDecode} from "jwt-decode";


function ProfilePage() {

    const [profileData, setProfileData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        async function fetchData() {
            try {
                setIsLoading(true);
                const result = await axios.get(
                    `http://localhost:8080/users/${username}`,
                    {signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }});
                setProfileData(result.data);
            } catch (e) {
                if (e.code === "ERR_CANCELED") {

                } else {
                    console.error(e, "Het is niet gelukt om de data op te halen.");
                    toast.error("Er is iets misgegaan. Probeer opnieuw.");
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



    return(
        <div className="outer-container">
            <div className="inner-container">

                <h1>Profiel</h1>

                <div>
                    <h2>Naam:</h2>
                    <p>{profileData.name}</p>
                </div>

                <div>
                    <h2>Gebruikersnaam:</h2>
                    <p>{profileData.username}</p>
                </div>

                <div>
                    <h2>Wachtwoord:</h2>
                    <p>{profileData.password}</p>
                </div>

                <div>
                    <h2>Email:</h2>
                    <p>{profileData.email}</p>
                </div>


            </div>
        </div>
    )
}

export default ProfilePage;