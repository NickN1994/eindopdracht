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


    async function handleFormSubmit(data, event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            const result = await axios.post("http://localhost:8080/login", {
                ...data}
            );
            login(result.data.accessToken);
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
                    labelName="Email"
                    inputType="email"
                    id="email"
                    validationRules={{
                        required: {
                            value: true,
                            message: "Email is verplicht om in te loggen"
                        },
                        validate: (value) => value.includes('@')}}
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
            <button><Link to="/register">Registreer hier</Link></button>

            {isLoading && (
                <div className="loader">
                </div>
            )}
        </div>
</div>
    )
}

export default Login;