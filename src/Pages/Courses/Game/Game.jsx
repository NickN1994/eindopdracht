import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Information from "../../../Compenents/Information.jsx";
import {useNavigate} from "react-router-dom";


function Game () {

    const [isLoading, setIsLoading] = useState(false);
    const [information, setInformation] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');
        async function fetchData () {
            try {
                setIsLoading(true);
                const result = await axios.get(
                    "http://localhost:8080/information",
                    {signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                // console.log("Gelukt");
                // console.log(result.data);
                setInformation(result.data);
            } catch (e) {

                if (e.code === "ERR_CANCELED") {
                    // console.log("Verzoek is geannuleerd:", e.message);
                } else {
                    // Het is een echte fout
                    console.error(e, "Het is niet gelukt om de data op te halen.");
                    toast.error("Er is iets misgegaan. Probeer opnieuw.");
                }
                // console.error(e + "Het is niet gelukt om de data op te halen.");
                // toast.error("Er is iets misgegaan. Probeer opnieuw.")
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        return () => {
            // console.log("Clean up");
            abortController.abort();
        };
    }, []);

    async function updateInformation(id) {
        try {
            const response = await axios.put(`http://localhost:8080/spel-des-levens/${id}`);
            if (response.status === 200) {
                toast.success("Informatie Spel des Levens is bijgewerkt");
                navigate("/spel-des-levens");
            }
        } catch (error) {
            toast.error("Er is iets misgegaan bij het bijwerken van de activiteit");
            console.error("Er is iets misgegaan bij het bijwerken van de activiteit", error);
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">
                {isLoading && (
                    <div className="loader">
                    </div>
                )}
                <h1>Spel des Levens</h1>
                {information.length > 0 && information.map((information) => {
                    return (
                        <Information
                            key={information.id}
                            title={information.title}
                            videoUrl={information.videoUrl}
                            content={information.content}
                            updateInformation={updateInformation}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Game;

