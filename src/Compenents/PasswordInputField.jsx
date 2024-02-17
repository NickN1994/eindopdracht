
import { useState } from "react";

function PasswordInputField({ labelName, inputType, id, placeholder, validationRules, register, errors, showToggle }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <label htmlFor={id}><p>{labelName}</p></label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type={showToggle && showPassword ? 'text' : inputType}
                       id={id}
                       name={id}
                       placeholder={placeholder}
                       {...register(id, validationRules)}
                />
                {showToggle && (
                    <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-regular fa-eye"}
                       onClick={togglePasswordVisibility}
                       style={{ marginLeft: '-30px', cursor: 'pointer' }}></i>
                )}
            </div>
            {errors[id] && <p className="inputFieldError">{errors[id].message}</p>}
        </div>
    );
}

export default PasswordInputField;
