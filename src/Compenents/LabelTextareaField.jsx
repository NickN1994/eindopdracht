

// eslint-disable-next-line react/prop-types
function LabelTextareaField ({labelName, id, cols, rows, placeholder, validationRules, register, errors}) {

    return (
        <div>
            <label htmlFor={id}><p>{labelName}</p></label>
            <textarea
                id={id}
                cols={cols}
                rows={rows}
                placeholder={placeholder}
                {...register(id, validationRules)}
            />
            {/* eslint-disable-next-line react/prop-types */}
            {errors[id] && <p style={{ color: '#FF0000' }}>{errors[id].message}</p>}
        </div>
    )
}

export default LabelTextareaField;