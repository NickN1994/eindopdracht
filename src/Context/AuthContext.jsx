import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid.js";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });
    const [admin, setAdmin] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const abortController = new AbortController();
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {

            void login(token);

        } else {

            setAuth({
                isAuth: false,
                user: null,
                status: 'done'
            })
        }
        return () => {
            console.log("clean up test");
            abortController.abort();
        }

    }, [])

    async function login (token) {
        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);
        console.log(token);

        try {
            const response = await axios.get(`http://localhost:8080/users/${decodedToken.sub}`, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            setAdmin(decodedToken.roles);
            console.log(decodedToken.roles);

            setAuth({
                isAuth: true,
                user: {

                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id
                },
                status: 'done',
            });
            // console.log("Ingelogd!!!!!!!!!!!")
            navigate('/')
        } catch (e) {
            logout();
        }
    }

    function logout () {

        localStorage.removeItem('token');
        setAuth({
            isAuth: false,
            user: null,
            status: 'done'
        });
        // console.log("uitgelogd!!!")
        navigate('/login')
    }

    const data = {
        auth: auth.isAuth,
        admin: admin,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={ data }>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;