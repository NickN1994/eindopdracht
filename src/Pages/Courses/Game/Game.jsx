import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import InformationBox from "../../../Compenents/InformationBox.jsx";
import {useNavigate} from "react-router-dom";


function Game () {

    const [isLoading, setIsLoading] = useState(false);
    const [information, setInformation] = useState([]);
    // const navigate = useNavigate();


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
                setInformation(result.data);
            } catch (e) {

                if (e.code === "ERR_CANCELED") {
                    // console.log("Verzoek is geannuleerd:", e.message);
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
            // console.log("Clean up");
            abortController.abort();
        };
    }, []);


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
                        <InformationBox
                            key={information.id}
                            id={information.id}
                            title={information.title}
                            videoUrl={information.videoUrl}
                            content={information.content}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Game;

