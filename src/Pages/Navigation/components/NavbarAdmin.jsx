import {Link, NavLink} from "react-router-dom";
import logo from "../Assets/LOGO-NICK-EN-KIRSTIE.png";
import Dropdown from "../Dropdown.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../../Context/AuthContext.jsx";
import "../Styles/NavbarAdmin.css";


function NavbarAdmin() {

    const [dropdown, setDropdown] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);

    const {logout} = useContext(AuthContext);

    const onMouseEnter = () => {
        if (window.innerWidth > 960) {
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
                setDropdownTimeout(null);
            }
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth > 960) {
            const timeoutId = setTimeout(() => {
                setDropdown(false);
            }, 500);
            setDropdownTimeout(timeoutId);
        }
    };

    return (
        <>
            <header className='outer-container-nav'>
                <nav className='navbar-admin'>
                    <div className='logoBox'>
                        <Link to="/"><img src={logo} alt="Logo"/></Link>
                    </div>

                    <div className={"menu-admin-box"}>
                        <ul className={"menu-admin"}>
                            <li>
                                <NavLink to={"/"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Home</NavLink>
                            </li>

                            <li>
                                <NavLink to={"/activiteiten"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Activiteiten</NavLink>
                            </li>

                            <li
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}>
                                <NavLink to={"/leeromgeving"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Leeromgeving<i className='fas fa-caret-down'/>
                                </NavLink>
                                {dropdown && <Dropdown/>}
                            </li>

                            <li>
                                <NavLink to={"/profiel"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Profiel</NavLink>
                            </li>

                            <li>
                                <NavLink to={"/admin"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Admin</NavLink>
                            </li>

                            <li>
                                <button type="button" onClick={logout} className="btn btn-orange">Uitloggen</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default NavbarAdmin;
