import {AuthContext} from "../../Context/AuthContext.jsx";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../Compenents/InputField.jsx";
import axios from "axios";


function Login () {

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
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="outer-container">
            <div className="inner-container">
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

                <InputField
                    labelName="Wachtwoord"
                    inputType="password"
                    id="password"
                    validationRules={{
                        required: {
                            value: true,
                            message: "Wachtwoord is verplicht"
                        }}}
                    register={register}
                    errors={errors}
                />

                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account?</p>
            <button><Link to="/registreren">Registreer hier</Link></button>

            {isLoading && (
                <div className="loader">
                </div>
            )}
        </div>
</div>
    )
}

export default Login;