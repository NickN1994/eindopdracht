import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {jwtDecode} from "jwt-decode";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "./ProfilePage.css"


function ProfilePage() {

    const [profileData, setProfileData] = useState(false);
    const [editProfileData, setEditProfileData] = useState({});
    const [editProfile, setEditProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState({});
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;

        const fetchProfileData = async () => {
            try {
                setIsLoading(true);
                const result = await axios.get(`http://localhost:8080/users/${username}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                setProfileData(result.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
                toast.error("Er is iets misgegaan. Probeer opnieuw.");
            }
        };

        const fetchImageData = async () => {
            try {
                const imageResult = await axios.get(`http://localhost:8080/image/${username}`, {
                    responseType: 'blob',
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (imageResult.data.size > 0) {
                    const imageUrl = URL.createObjectURL(imageResult.data);
                    setImage({ imageData: imageUrl });
                } else {
                    setImage({});
                }
            } catch (error) {
                console.error("Error fetching image data:", error);
            }
        };

        fetchProfileData();
        fetchImageData();

        return () => {
            abortController.abort();
        };
    }, [image]);

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

    async function deleteImage() {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;
        try {
            const response = await axios.delete(`http://localhost:8080/image/${username}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.status === 204 || response.status === 200) {
                toast.success("Profielfoto is verwijderd");
                setImage({}); // Wis de afbeeldingsstaat
                navigate("/profiel");
            }
        } catch (error) {
            console.error("Fout bij het verwijderen van de afbeelding:", error);
            if (error.response) {
                console.error("Server response:", error.response.data);
                toast.error("Server error: " + error.response.data.message);
            } else if (error.request) {
                toast.error("Geen antwoord van de server");
            } else {
                toast.error("Error: " + error.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        if (!selectedFile) {
            toast.error("Selecteer een bestand om te uploaden.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const username = decodedToken.sub;
        formData.append('username', username);

        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:8080/image", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // Verwijder 'Content-Type': 'application/json', FormData regelt dit zelf.
                }
            });
            toast.success("Profielfoto is toegevoegd.");

        } catch (error) {
            console.error("Fout bij uploaden: ", error);
            toast.error("Uploaden mislukt.");
        } finally {
            setIsLoading(false);
        }
    }



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

                    <div className="colums">
                        <section className="colum-one">
                            <form onSubmit={handleFormSubmit}>
                                <input type="file" onChange={handleFileChange} />
                                <button type="submit">Upload</button>
                            </form>

                            {image.imageData && (
                                <div>
                                    <figure className="image-box">
                                        <img src={image.imageData} alt="Profiel foto" className="PFimage" />
                                    </figure>
                                    <button type="button" onClick={deleteImage}>Profielfoto verwijderen</button>
                                </div>
                            )}
                        </section>

                    <section className="colum-two">
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
                    </section>
                </div>
                }

            {/*    Inner container*/}
            </div>
        {/*    Outer container*/}
        </div>
    )
}

export default ProfilePage;