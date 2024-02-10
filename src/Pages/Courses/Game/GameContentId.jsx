import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";


function GameContentId() {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const {id} = useParams();
    const [information, setInformation] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [deleteCheck, setDeleteCheck] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const abortController = new AbortController();
            const token = localStorage.getItem('token');
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:8080/information/${id}`, {
                    signal: abortController.signal,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setInformation(response.data);

                setValue('title', response.data.title);
                setValue('videoUrl', response.data.videoUrl);
                setValue('content', response.data.content);
            } catch (e) {
                console.error(e, "Het is niet gelukt om de data op te halen.");
                toast.error("Er is iets misgegaan. Ververs de pagina.");
            } finally {
                setIsLoading(false);
            }
            return () => abortController.abort();
        };

        fetchData();
    }, [id, setValue]);


    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        setIsLoading(true);

        try {
            const response = await axios.put(`http://localhost:8080/information/${id}`, data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }});
            if (response.status === 200) {
                toast.success("Content is bijgewerkt");
                navigate("/spel-des-levens");
            }
        } catch (error) {
            toast.error("Er is iets misgegaan bij het bijwerken van de content");
            console.error("Er is iets misgegaan bij het bijwerken van de content", error);
        } finally {
            setIsLoading(false);
        }
    };


    async function deleteInformation(id) {
        setIsLoading(true)
        try {
            await axios.delete(`http://localhost:8080/information/${id}`);
            toast.success("Content is verwijderd");
            navigate("/information");
        } catch (error) {

            if (error.response && error.response.status === 404) {
                toast.error("Content niet gevonden");
            } else {
                toast.error("Er is een probleem opgetreden bij het verwijderen");
            }
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
                        <label htmlFor="title">Titel</label>
                        <input id="title" {...register('title')} />
                        {errors.title && <p>{errors.title.message}</p>}

                        <label htmlFor="videoUrl">videoUrl</label>
                        <input id="videoUrl" {...register('videoUrl')} />
                        {errors.videoUrl && <p>{errors.videoUrl.message}</p>}

                        <label htmlFor="content">Content aanpassen</label>
                        <textarea id="content" {...register('content')} />
                        {errors.content && <p>{errors.content.message}</p>}

                        <button type="submit">Opslaan</button>
                        <button type="button"><Link to={"/spel-des-levens"}>Annuleren</Link></button>

                        <button onClick={() => setDeleteCheck(true)}>Content verwijderen</button>
                        {deleteCheck &&
                            <div>
                                <button type="button" onClick={() => deleteInformation(information.id)}>Klik hier om
                                    definitief
                                    te verwijderen
                                </button>
                                <button onClick={() => setDeleteCheck(false)}>Annuleren</button>
                            </div>}
                    </form>
                    :
                    <div>
                        <h1>{information.title}</h1>
                        <video src={information.videoUrl}></video>
                        <p>{information.content}</p>

                        <button type="button">
                            <Link to={"/contact"}>Heb je nog vragen? Klik hier om contact met ons op te nemen</Link>
                        </button>
                    </div>
                }

            </div>
        </div>
    )
}

export default GameContentId;