

function LabelInputField ({labelName, inputType, id, placeholder, validationRules, register, errors}) {
    return (
        <div>
            <label htmlFor={id}><p>{labelName}</p></label>
            <input type={inputType}
                   id={id}
                   placeholder={placeholder}
                   {...register(id, validationRules)}
            />
            {errors[id] && <p>{errors[id].message}</p>}
        </div>
    )
}

export default LabelInputField;