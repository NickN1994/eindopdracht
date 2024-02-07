import "./Styles/Navbar.css"


import NavbarBasic from "./components/NavbarBasic.jsx";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext.jsx";
import NavbarAdmin from "./components/NavbarAdmin.jsx";


function Navbar() {

    const {admin} = useContext(AuthContext);



    return (
    <>
        {admin === "ROLE_ADMIN,ROLE_USER" ?
            <div>
            <NavbarAdmin/>

            </div>
            :
            <div>
                <NavbarBasic/>
            </div>
        }
        </>
    )
}

export default Navbar;