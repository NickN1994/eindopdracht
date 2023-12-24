import {useForm} from 'react-hook-form';
import './Contact.css'

function Contact() {
    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;


    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <h1>Contact</h1>
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
        </>
    )
}

export default Contact;
