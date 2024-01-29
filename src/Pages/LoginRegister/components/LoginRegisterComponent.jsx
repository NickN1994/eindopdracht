
// eslint-disable-next-line react/prop-types
function LoginRegisterComponent ({labelName, type, name, id, value, onChange}) {

    return (
        <div>
        <label htmlFor="email">{labelName}</label>
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
            {/* HIER NOG ERROR MESSAGE MAKEN ALS EMAIL OF WACHTWOORD AL BESTAAT */}
            {/*{error && <p>Combinatie van </p>}*/}
        </div>
    )
}

export default LoginRegisterComponent;