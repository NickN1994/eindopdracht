import axios from "axios";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import {useState} from "react";
import LabelInputField from "../../../Compenents/LabelInputField.jsx";
import LabelTextareaField from "../../../Compenents/LabelTextareaField.jsx";


function AddInformationGame () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [gameInformation, setGameInformation] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function handleFormSubmit (data) {
        const token = localStorage.getItem('token');
        try {
            setIsLoading(true);
            const result = await axios.post("http://localhost:8080/information", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Informatie voor het Spel des Levens is toegevoegd.")
            setGameInformation(result.data);
        } catch (e) {
            console.error(e + "Het is niet gelukt om de informatie toe te voegen");
            toast.error("Het is niet gelukt om de informatie toe te voegen")
        } finally {
            setIsLoading(false);
        }
    }

    return (

                <form className="form-admin" onSubmit={handleSubmit(handleFormSubmit)}>
                    <h2>Content Spel des Levens toevoegen</h2>
                    <fieldset>
                        <LabelInputField
                            labelName="Titel"
                            inputType="text"
                            id="title"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Titel is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Url video"
                            inputType="text"
                            id="videoUrl"
                            register={register}
                            errors={errors}
                        />

                        <LabelTextareaField
                            labelName="Content"
                            id="content"
                            placeholder="Beschrijf hier je content"
                            cols="30"
                            rows="10"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />
                    </fieldset>

                    <button type="submit" disabled={isLoading} className="btn btn-orange">Informatie toevoegen</button>
                    {isLoading && (
                        <div className="loader">
                        </div>
                    )}
                </form>

    )
}

export default AddInformationGame;