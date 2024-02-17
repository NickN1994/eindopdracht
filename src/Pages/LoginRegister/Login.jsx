import {AuthContext} from "../../Context/AuthContext.jsx";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../Compenents/InputField.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import PasswordInputField from "../../Compenents/PasswordInputField.jsx";
import "./Login.css"

function Login() {

    const {login} = useContext(AuthContext);
    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    // validaties toevoegen en de juiste meldingen bij een verkeerde username of wachtwoord

    async function handleFormSubmit(data) {

        try {
            setIsLoading(true);
            const result = await axios.post("http://localhost:8080/authenticate", {
                    username: data.username,
                    password: data.password
                }
            );
            console.log(result.data)
            login(result.data.jwt);
            navigate("/");
        } catch (e) {
            console.error(e + "Inloggen mislukt");
            toast.error("Gebruikersnaam en/of wachtwoord incorrect.")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="outer-container bkgr-yellow">
            <div className="inner-container">
                <h1>Wat fijn dat je er bent</h1>
                <div className="form-box">
                    <h2>Vul hier je inloggegeven in</h2>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
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

                        {/*<InputField*/}
                        {/*    labelName="Wachtwoord"*/}
                        {/*    inputType="password"*/}
                        {/*    id="password"*/}
                        {/*    validationRules={{*/}
                        {/*        required: {*/}
                        {/*            value: true,*/}
                        {/*            message: "Wachtwoord is verplicht"*/}
                        {/*        }}}*/}
                        {/*    register={register}*/}
                        {/*    errors={errors}*/}
                        {/*/>*/}

                        <PasswordInputField
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
                            showToggle={true}
                        />

                        <button type="submit" className="btn btn-orange">Inloggen</button>
                    </form>
                    <p>Heb je nog geen account?</p>
                    <Link to={"/registreren"} className="btn btn-purple">Registreer hier</Link>

                    {isLoading && (
                        <div className="loader">
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Login;