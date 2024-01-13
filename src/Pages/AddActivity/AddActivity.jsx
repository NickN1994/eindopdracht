import {useForm} from "react-hook-form";
import LabelInputField from "../../Compenents/LabelInputField.jsx";
import LabelTextareaField from "../../Compenents/LabelTextareaField.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";



function AddActivity () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [activity, setActivity] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        return () => {
            console.log("clean up");
            abortController.abort();
        }

    }, []);

    async function handleFormSubmit (data) {
        try {
            setIsLoading(true);
            const result = await axios.post("http://localhost:8080/add-activity", {
            ...data
        });
            toast.success("Activiteit is toegevoegd.")
            setActivity(result.data);
        } catch (e) {
            console.error(e + "Het is niet gelukt om activiteit toe te voegen.");
            toast.error("Het is niet gelukt om activiteit toe te voegen.")
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <h2>Activiteit toevoegen</h2>
                    <fieldset>
                        <LabelInputField
                            labelName="Naam Activiteit"
                            inputType="text"
                            id="naam activiteit"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Naam activiteit is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Aantal beschikbare plekken"
                            inputType="text"
                            id="aantal deelnemers"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Aantal deelnemers invullen is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Begeleider"
                            inputType="text"
                            id="begeleider"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Datum"
                            inputType="date"
                            id="aantal deelnemers"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Aantal deelnemers invullen is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Tijd"
                            inputType="text"
                            id="tijd"
                            placeholder="Bijvoorbeeld: 10.00u tot 16.00u"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Tijd invullen is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelTextareaField
                            labelName="Beschrijf acitiviteit"
                            id="telefoonnummer"
                            placeholder="Typ hier je bericht"
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
                    <button type="submit">Activiteit aanmaken</button>
                </form>
                {isLoading && (
                    <div className="loader">
                        Loading...
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddActivity;