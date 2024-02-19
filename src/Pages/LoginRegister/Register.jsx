import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../Compenents/InputField.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import "./Login.css"

function Register() {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

     async function handleFormSubmit(data) {
        try {
            setIsLoading(true);

            const result = await axios.post("http://localhost:8080/users", {
                name: data.name,
                username: data.username,
                email: data.email,
                password: data.password,
                enabled: true}
            );
            console.log(result)
            toast.success("Registratie is gelukt, log nu in.");
            navigate("/login")
        } catch (e) {
            toast.error("Registratie mislukt, probeer het nog eens.");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="outer-container bkgr-yellow">
            <div className="inner-container">

                    <h1>Registreer hier je account</h1>
                    <div className="form-box">
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <fieldset>
                            <InputField
                                labelName="Naam"
                                inputType="text"
                                id="name"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: "Naam is verplicht"
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />

                            <InputField
                                labelName="Gebruikersnaam"
                                inputType="text"
                                id="username"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: "Gebruikersnaam is verplicht"
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />

                            <InputField
                                labelName="Email"
                                inputType="email"
                                id="email"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: "Email is verplicht"
                                    },
                                    validate: (value) => value.includes('@')
                                }}
                                register={register}
                                errors={errors}
                            />

                            <InputField
                                labelName="Wachtwoord"
                                inputType="password"
                                id="password"
                                validationRules={{
                                    required: {
                                        value: true,
                                        message: "Wachtwoord is verplicht"
                                    }
                                }}
                                register={register}
                                errors={errors}
                            />
                            <button type="submit" className="btn btn-orange">Registreren</button>

                            {isLoading && (
                                <div className="loader">
                                </div>
                            )}

                        </fieldset>
                    </form>
                        <p>Heb je al een account?</p>
                        <Link to={"/login"} className="btn btn-purple">Inloggen</Link>
                    </div>

                {isLoading && (
                    <div className="loader">
                    </div>
                )}

            </div>
        </div>
    )
}

export default Register