import {useForm} from "react-hook-form";
import LabelInputField from "../../Compenents/LabelInputField.jsx";
import LabelTextareaField from "../../Compenents/LabelTextareaField.jsx";


function AddActivity () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;

    // onSubmit={handleSubmit(handleFormSubmit)}

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <form >
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
            </div>
        </div>
    )
}

export default AddActivity;