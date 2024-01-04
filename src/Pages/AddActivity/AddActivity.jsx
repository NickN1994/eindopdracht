import {useForm} from "react-hook-form";


function AddActivity () {

    const form = useForm();
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;


    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <form onSubmit={handleSubmit(handleFormSubmit)}></form>
                <label htmlFor="Naam acitviteit"><p>Naam Activiteit</p></label>
                <input type="text" id="name activity" {...register('name activity',
                    {
                        required: {
                            value: true,
                            message: 'Veld is verplicht',
                        }
                    }
                )} />
                <p>{errors.name?.message}</p>
            </div>
        </div>
    )
}

export default AddActivity;