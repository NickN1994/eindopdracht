import {useForm} from 'react-hook-form';
import './Contact.css'
import LabelInputField from "../../Compenents/LabelInputField.jsx";
import axios from "axios";
import {useState} from "react";
import LabelTextareaField from "../../Compenents/LabelTextareaField.jsx";
import { toast } from 'react-toastify';

function Contact() {
    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    // const [dataForm, setDataForm] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    async function handleFormSubmit (data) {
        const token = localStorage.getItem('token');
        try {
            setIsLoading(true);
            await axios.post("http://localhost:8080/send-email", {
                ...data,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
                }
            );
            toast.success("Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.");

        } catch (e) {
            console.error(e + "Het is niet gelukt om je bericht te verzenden");
            toast.error("Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <div className='columns'>
                    <section className='contactInfo'>
                        <h1>Contact</h1>
                        <p>Vul het contactformulier in om contact met ons op te nemen. We streven er naar om binnen 48 uur te reageren.</p>
                        <div className='contactInfoBox'>
                            <i className="fa-solid fa-location-dot"></i>
                            <div className='adres'>
                            <p>Heibloemdijk 1</p>
                            <p>5688 JV Oirschot</p>
                            </div>
                        </div>

                        <div className='contactInfoBox'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+316 57 34 62 57</p>
                        </div>

                        <div className='contactInfoBox'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@nickenkirstie.nl</p>
                        </div>
                    </section>


                    <section className='formBox'>
                        <form className="contactForm" onSubmit={handleSubmit(handleFormSubmit)}>
                            <fieldset>

                                <LabelInputField
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

                                <LabelInputField
                                    labelName="Email"
                                    inputType="email"
                                    id="email"
                                    validationRules={{
                                        required: {
                                            value: true,
                                            message: "Email is verplicht, zodat we contact met je kunnen opnemen."
                                        },
                                        validate: (value) => value.includes('@')}}
                                    register={register}
                                    errors={errors}
                                />

                                <LabelInputField
                                    labelName="Telefoonnummer"
                                    inputType="text"
                                    id="telefoonnummer"
                                    validationRules={{
                                        required: {
                                            value: false,
                                        }}}
                                    register={register}
                                    errors={errors}
                                />

                                <LabelTextareaField
                                    labelName="Typ hier je bericht"
                                    id="bericht"
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
                            <button type="submit"
                                    className="btn btn-orange"
                            >Verstuur je bericht</button>
                        </form>
                        {isLoading && (
                            <div className="loader">
                            </div>
                        )}
                    </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
