import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext.jsx";


// eslint-disable-next-line react/prop-types
function ShowNavBar ({children}) {

    const [showNavbar, setShowNavBar] = useState(false);
    const location = useLocation();


    useEffect(() => {
        if (location.pathname === "/login" || location.pathname === "/registreren") {
            setShowNavBar(false);
        } else {
            setShowNavBar(true);
        }
    }, [location.pathname]);

    return (
        <div>{showNavbar && children}</div>
    )
}

export default ShowNavBar;