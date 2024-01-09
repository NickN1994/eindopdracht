import {useForm} from 'react-hook-form';
import './Contact.css'
import location from './Assets/location.png'
import phone from './Assets/phone.png'
import email from './Assets/email.png'
import LabelInputField from "../../Compenents/LabelInputField.jsx";
import axios from "axios";
import {useState} from "react";
import LabelTextareaField from "../../Compenents/LabelTextareaField.jsx";
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const [dataForm, setDataForm] = useState({});

    // handlesubmit methode nog maken
    // zichtbare notificatie maken wanneer verzenden gelukt is.
    // preventdefault ?


  async function handleFormSubmit (data) {
      try { const result = await axios.post("http://localhost:8080/send-email", {
          ...data
      });
          toast.success("Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.")
        setDataForm(result.data);
      } catch (e) {
        console.error(e + "Het is niet gelukt om je bericht te verzenden");
        toast.error("Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.")
      }
  }


    return (
        <>
            <div className='outer-container outer-contact'>
                <div className='inner-container'>
                    <div className='colums'>
                    <section className='contactInfo'>
                        <h1>Contact</h1>
                        <p>Vul het contactformulier in om contact met ons op te nemen. We streven er naar om binnen 48 uur te reageren.</p>
                        <div className='contactInfoBox'>
                            <img src={location} alt="locatie"/>
                            <div className='adres'>
                            <p>Heibloemdijk 1</p>
                            <p>5688 JV Oirschot</p>
                            </div>
                        </div>

                        <div className='contactInfoBox'>
                            <img src={phone} alt="phone"/>
                            <p>+316 57 34 62 57</p>
                        </div>

                        <div className='contactInfoBox'>
                            <img src={email} alt="email"/>
                            <p>info@nickenkirstie.nl</p>
                        </div>
                    </section>


                    <section className='formBox'>
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                            >Verstuur je bericht</button>
                        </form>
                    </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
