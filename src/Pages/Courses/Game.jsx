import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import Information from "../../Compenents/Information.jsx";


function Game () {

    const [isLoading, setIsLoading] = useState(false);
    const [information, setInformation] = useState(false);


    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData () {
            try {
                setIsLoading(true);
                const result = await axios.get(
                    "http://localhost:8080/information",
                    {signal: abortController.signal});
                // console.log("Gelukt");
                // console.log(result.data);
                setInformation(result.data);
                toast.success("Activiteit is toegevoegd.")
            } catch (e) {
                console.error(e + "Het is niet gelukt om de data op te halen.");
                toast.error("Er is iets misgegaan. Probeer opnieuw.")
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
                        <Information
                            key={information.id}
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

