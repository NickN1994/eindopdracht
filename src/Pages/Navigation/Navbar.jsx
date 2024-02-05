import "./Navbar.css"
import Dropdown from "./Dropdown.jsx"
import {Link, NavLink} from "react-router-dom";
import logo from "./Assets/LOGO-NICK-EN-KIRSTIE.png";
import {useContext, useEffect, useState} from "react";
import Button from "../../Compenents/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";


function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const {logout, auth, admin} = useContext(AuthContext);

    useEffect(() => {
        if (auth.isAuth) {
            setLoggedIn(true);
            if (admin) {
                setAdminLoggedIn(true);
            } else {
                setAdminLoggedIn(false);
            }
        }
    }, []);


    // hier code schrijven om de nav en de footer zichtbaar te maken voor mensen die zijn ingelogd en dan
    // kijkeno f het user of admin is. met if statement kijken of auth.isAuth true is, if true
    // dan if user logged in dan navigatie voor user maken en anders admin
    // de pagina's van admin nog wel zo maken dat deze alleen zichtbaar zijn voor admin

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }


    return (

        loggedIn && adminLoggedIn ?
            <>
                <header className='outer-container-nav'>
                    <nav className='navbar'>
                        <div className='logoBox'>
                            <Link to="/"><img src={logo} alt="Logo"/></Link>
                            <div className="menu-icon" onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                            </div>
                        </div>
                        {/*<ul className={click ? 'nav-menu active' : 'nav-menu'}>*/}
                        {/*    <li className='nav-item'>*/}
                        {/*        <NavLink to='/login'*/}
                        {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                        {/*                 onClick={closeMobileMenu}>*/}
                        {/*            Login*/}
                        {/*        </NavLink></li>*/}
                        {/*    <li className='nav-item'>*/}
                        {/*        <NavLink to='/registreren'*/}
                        {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                        {/*                 onClick={closeMobileMenu}>*/}
                        {/*            Registreren*/}
                        {/*        </NavLink></li>*/}
                        {/*</ul>*/}

                    </nav>
                </header>
            </>
            :
            <>
                <header className='outer-container-nav'>
                    <nav className='navbar'>
                        <div className='logoBox'>
                            <Link to="/"><img src={logo} alt="Logo"/></Link>
                            <div className="menu-icon" onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                            </div>
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <NavLink to='/'
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                         onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to='/activiteiten'
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                         onClick={closeMobileMenu}>
                                    Activiteiten
                                </NavLink>
                            </li>


                            <li className='nav-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}

                            >
                                <NavLink to='/leeromgeving'
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                         onClick={closeMobileMenu}>
                                    Leeromgeving <i className='fas fa-caret-down'/>
                                </NavLink>
                                {dropdown && <Dropdown/>}
                            </li>

                            <li className='nav-item'>
                                <NavLink to='/profiel'
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                         onClick={closeMobileMenu}>
                                    Profiel
                                </NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to='/contact'
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                         onClick={closeMobileMenu}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <Button type="button" buttonName="Activiteit toevoegen" linkto="/activiteit-toevoegen"/>
                        <button type="button" onClick={logout}>Uitloggen</button>

                    </nav>
                </header>
            </>

)
}

export default Navbar;