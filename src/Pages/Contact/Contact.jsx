import {useForm} from 'react-hook-form';
import './Contact.css'
import axios from "axios";
import location from './Assets/location.png'
import phone from './Assets/phone.png'
import email from './Assets/email.png'

function Contact() {
    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;


    // Mail versturen met Java mail: vid https://www.youtube.com/watch?v=ugIUObNHZdo
    // handlesubmit methode nog maken

    // const handleSubmit = () => {
    //
    // }

    // async function postContactForm () {
    //     try {
    //         const result = await axios.post (url, data{
    //             //hier data beschrijven die meegestuurd moet worden naar backend
    //         })
    //     } catch (e) {
    //         console.error(e + "Het is niet gelukt om je bericht te versturen")
    //     }
    // }

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
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <label htmlFor="name"><p>Naam</p></label>
                                <input type="text" id="name" {...register('name',
                                    {
                                        required: {
                                            value: true,
                                            message: 'Naam is verplicht',
                                        }
                                    }
                                )} />
                                <p>{errors.name?.message}</p>

                                <label htmlFor="email"><p>Email</p></label>
                                <input type="email" id="email" {...register('email',
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is verplicht, zodat we contact met je kunnen opnemen',
                                        }
                                    }
                                )} />
                                <p>{errors.email?.message}</p>

                                <label htmlFor="telefoonnummer"><p>Telefoonnummer</p></label>
                                <input type="text" id="telefoonnummer" {...register('telefoonnummer',
                                    {
                                        required: {
                                            value: true,
                                            message: 'Telefoonnummer is verplicht, zodat we contact met je kunnen opnemen',
                                        }
                                    }
                                )} />
                                <p>{errors.telefoonnummer?.message}</p>

                                <label htmlFor="bericht"><p>Typ hieronder je bericht</p></label>
                                <textarea
                                    name="bericht"
                                    placeholder="Typ hier je bericht"
                                    id="bericht"
                                    cols="30"
                                    rows="10"
                                    {...register('bericht', {
                                        required: {
                                            value: true,
                                            message: 'Dit veld is verplicht'
                                        },
                                    })}
                                ></textarea>
                                <p>{errors.bericht?.message}</p>
                            </fieldset>
                            <button type='submit'>Verstuur je bericht</button>
                        </form>
                    </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
