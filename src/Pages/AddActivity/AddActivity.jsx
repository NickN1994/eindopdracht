import {useForm} from "react-hook-form";
import LabelInputField from "../../Compenents/LabelInputField.jsx";
import LabelTextareaField from "../../Compenents/LabelTextareaField.jsx";
import axios from "axios";
import {toast} from "react-toastify";
import {useState} from "react";




function AddActivity () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [activity, setActivity] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // TOEVOEGEN OM EEN AFBEELDING UP TE LOADEN EN BIJ ACTIVITEIT TE PLAATSEN

    async function handleFormSubmit (data) {
        const token = localStorage.getItem('token');
        try {
            setIsLoading(true);
            const result = await axios.post("http://localhost:8080/activities", data,{

                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Activiteit is toegevoegd.")
            setActivity(result.data);
        } catch (e) {
            // console.log(data)
            console.error(e + "Het is niet gelukt om activiteit toe te voegen");
            toast.error("Het is niet gelukt om activiteit toe te voegen")
        } finally {
            setIsLoading(false);
        }
    }


    return (
        // <div className='outer-container'>
        //     <div className='inner-container'>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <h2>Activiteit toevoegen</h2>
                    <fieldset>
                        <LabelInputField
                            labelName="Naam Activiteit"
                            inputType="text"
                            id="name"
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
                            id="participants"
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
                            id="teacher"
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
                            id="date"
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "Datum invullen is verplicht"
                                }}}
                            register={register}
                            errors={errors}
                        />

                        <LabelInputField
                            labelName="Tijd"
                            inputType="text"
                            id="time"
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
                            id="activityInfo"
                            placeholder="Beschrijf hier je activiteit"
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
                    <button type="submit" disabled={isLoading}>Activiteit toevoegen
                    </button>
                    {isLoading && (
                        <div className="loader">
                        </div>
                    )}
                </form>
        //     </div>
        // </div>
    )
}

export default AddActivity;