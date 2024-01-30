import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../../Compenents/InputField.jsx";
import axios from "axios";
import {toast} from "react-toastify";


function Register () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // foutafhandeling maken, gebruikersnaam / email is in gebruik
    // email validati, bijvoorbeeld yup of validator


    async function handleFormSubmit (data, event) {
        event.preventDefault();
        try {
            setIsLoading(true);
            await axios.post("http://localhost:8080/register", {
                ...data}
            );
            toast.success("Registratie is gelukt, log nu in.");
        } catch (e) {
            toast.error("Registratie mislukt, probeer het nog eens.")
        } finally {
            setIsLoading(false);
            navigate('/signin');
        }
    }


    return (
        <div className="outer-container">
            <div className="inner-container">

                <section>
                    <h1>Registreer hier je account</h1>
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
                                }}}
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
                        <button type="submit">Verstuur je bericht
                        </button>

                        {isLoading && (
                            <div className="loader">
                            </div>
                        )}

                    </fieldset>
                    </form>

                    <p>Heb je al een account?</p>
                    <button><Link to="/login">Inloggen</Link></button>
                </section>

                {isLoading && (
                    <div className="loader">
                    </div>
                )}

            </div>
        </div>
    )
}

export default Register