import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";


function ProfilePage() {

    const [profileData, setProfileData] = useState(false);
    const [editProfileData, setEditProfileData] = useState({});
    const [editProfile, setEditProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState({});
    const [imageObject, setImageObject] = useState(false);
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const navigate = useNavigate();

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
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                setProfileData(result.data);
                if (profileData != null) {
                    setImageObject(true);
                }
                const imageResult = await axios.get(`http://localhost:8080/image/${username}`,
                    {
                        signal: abortController.signal,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }});
                setImage(imageResult.data);
            } catch (e) {
                if (e.code === "ERR_CANCELED") {
                    // foutmelding
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

    const changeProfile = async () => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        setEditProfile(true);
        try {
            const response = await axios.get(`http://localhost:8080/users/${username}`, {
                signal: abortController.signal,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setEditProfileData(response.data);

            setValue('name', response.data.name);
            setValue('username', response.data.username);
            setValue('password', response.data.password);
            setValue('email', response.data.email);
        } catch (e) {
            console.error(e, "Het is niet gelukt om de data op te halen.");

            toast.error("Er is iets misgegaan. Ververs de pagina.");
        } finally {
            setIsLoading(false);
        }
        return () => abortController.abort();
    };

    const onSubmit = async (data) => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;
        setIsLoading(true);

        try {
            const response = await axios.put(`http://localhost:8080/users/${username}`, data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }});
            console.log("Response: ", response);
            if (response.status === 200) {
                toast.success("Profiel is bijgewerkt");
                navigate("/profiel");
            }
        } catch (error) {
            toast.error("Er is iets misgegaan bij het bijwerken van de activiteit");
            console.error("Er is iets misgegaan bij het bijwerken van de activiteit", error);
        } finally {
            setIsLoading(false);
        }
    };


    return (


        <div className="outer-container">
            <div className="inner-container">
                <h1>Profiel</h1>

                {editProfile ?
                <div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Profiel aanpassen</h2>
                    <label htmlFor="name">Naam</label>
                    <input id="name" {...register('name')} />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="password">Wachtwoord</label>
                    <input id="password" type="password" {...register('password')} />
                    {errors.password && <p>{errors.password.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input id="email" {...register('email')} />
                    {errors.email && <p>{errors.email.message}</p>}

                    <div>
                    <button type="submit">Opslaan</button>
                    <button type="button" onClick={() => setEditProfile(false)}>Annuleren</button>
                    </div>
                    </form>
                </div>

                    :

                <div>
                    
                    <div>
                        <figure>
                            <img src={image.imageData} alt="profielFoto"/>
                        </figure>
                        {imageObject ?
                            <button type="button">Profielfoto verwijderen</button>
                            :
                            <button type="button">Profiel uploaden</button>
                        }
                    </div>
                    
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
                        <p>*********</p>
                    </div>

                    <div>
                        <h2>Email:</h2>
                        <p>{profileData.email}</p>
                    </div>

                    <button type="button" onClick={changeProfile}>Profiel bewerken</button>
                </div>
                }

            {/*    Inner container*/}
            </div>
        {/*    Outer container*/}
        </div>
    )
}

export default ProfilePage;