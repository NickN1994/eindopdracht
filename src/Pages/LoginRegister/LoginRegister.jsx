import axios from "axios";
import {useState} from "react";
import LoginRegisterHelper from "./LoginRegisterHelper.jsx";


function LoginRegister () {

    const [error, toggleError] = useState(false);
    const [data, setData] = useState({});
    const [name, setName] = useState("");
    // const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit (data) {
        try {
            const result = await axios.post("", {
            ...data

        });
            setData(result.data)

        } catch (e) {
            console.error(e + "Het is niet gelukt om je bericht te verzenden");
        }
    }

    return (
        <div className="outer-container">
            <div className="inner-container">
                
                <div className="form-container sign-up">
                {/*    REGISTREREN  */}
                <form onSubmit={handleSubmit}>
                    <h1>Registreer hier je account</h1>

                    <LoginRegisterHelper
                        labelName="Naam"
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={error}
                    />

                    {/*<LoginRegisterHelper*/}
                    {/*    labelName="Gebruikersnaam"*/}
                    {/*    type="text"*/}
                    {/*    id="username"*/}
                    {/*    name="username"*/}
                    {/*    value={username}*/}
                    {/*    onChange={(e) => setUserName(e.target.value)}*/}
                    {/*    error={error}*/}
                    {/*/>*/}

                    <LoginRegisterHelper
                        labelName="Email adres"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                    />

                    <LoginRegisterHelper
                        labelName="Wachtwoord"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={error}
                    />
                    <button type="submit">Registreer</button>
                </form>
                </div>

                <div className="form-container sign-up">
                    <form onSubmit={handleSubmit}>
                        <h1>Inloggen</h1>

                        <LoginRegister
                            labelName="Email adres"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}/>

                        <LoginRegisterHelper
                            labelName="Wachtwoord"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={error}
                        />
                        <button type="submit">Inloggen</button>
                    </form>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h2>Welkom</h2>
                                <p>Registreer hier je account</p>
                                <button className="hidden" id="login">Heb je al een account? Kik hier om in te loggen</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h2>Welkom</h2>
                                <p>Vul hier je gegevens in om in te loggen</p>
                                <button className="hidden" id="register">Nog geen account? Klik hier om er één aan te maken</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default LoginRegister;