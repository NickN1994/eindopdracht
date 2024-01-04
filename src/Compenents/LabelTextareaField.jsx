

function LabelTextareaField ({labelName, id, cols, rows, validationRules, register, errors}) {

    return (
        <div>
            <label htmlFor={id}><p>{labelName}</p></label>
            <textarea
                id={id}
                cols={cols}
                rows={rows}
                {...register(id, validationRules)}
            />
            {errors[id] && <p>{errors[id].message}</p>}
        </div>
    )
}

export default LabelTextareaField;