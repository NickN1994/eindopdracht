import axios from "axios";
import {useEffect, useState} from "react";
import LoginRegisterComponent from "./components/LoginRegisterComponent.jsx";
import "./LoginRegister.css"

function LoginRegister() {

    const [error, toggleError] = useState(false);
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(data) {
        try {
            const result = await axios.post("", {
                ...data

            });
            setData(result.data)

        } catch (e) {
            console.error(e + "Het is niet gelukt om je bericht te verzenden");
        }
    }

    // const container = document.getElementById('container');
    // const registerBtn = document.getElementById('register');
    // const loginBtn = document.getElementById('login');
    //
    // registerBtn.addEventListener('click', () => {
    //     container.classList.add("active");
    // });
    //
    // loginBtn.addEventListener('click', () => {
    //     container.classList.remove("active");
    // });

    return (
        <div className="outer-container">
            <div className="inner-container">

                <div className="form-container sign-up">
                        {/*REGISTREREN  */}
                    <form onSubmit={handleSubmit}>
                        <h1>Registreer hier je account</h1>
                        <fieldset>

                        <LoginRegisterComponent
                            labelName="Naam"
                            type="text"
                            id="name_field"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={error}
                        />

                        <LoginRegisterComponent
                            labelName="Gebruikersnaam"
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            error={error}
                        />

                        <LoginRegisterComponent
                            labelName="Email adres"
                            type="email"
                            id="email_field"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}
                        />

                        <LoginRegisterComponent
                            labelName="Wachtwoord"
                            type="password"
                            id="password_field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={error}
                        />
                        <button type="submit">Registreer</button>
                        </fieldset>
                    </form>
                </div>

                <div className="form-container sign-up">
                    <form onSubmit={handleSubmit}>
                        <h1>Inloggen</h1>
                        <fieldset>

                        <LoginRegisterComponent
                            labelName="Email adres"
                            type="email"
                            id="email_field_login"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}/>

                        <LoginRegisterComponent
                            labelName="Wachtwoord"
                            type="password"
                            id="password_field_login"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={error}
                        />
                        <button type="submit">Inloggen</button>
                        </fieldset>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h2>Welkom</h2>
                            <p>Registreer hier je account</p>
                            <button className="hidden" id="login">Heb je al een account? Kik hier om in te loggen
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h2>Welkom</h2>
                            <p>Vul hier je gegevens in om in te loggen</p>
                            <button className="hidden" id="register">Nog geen account? Klik hier om er één aan te
                                maken
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;