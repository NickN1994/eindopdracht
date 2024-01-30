import "./Navbar.css"
import Dropdown from "./Dropdown.jsx"
import {Link, NavLink} from "react-router-dom";
import logo from "./Assets/LOGO-NICK-EN-KIRSTIE.png";
import {useContext, useState} from "react";
import Button from "../../Compenents/Button.jsx";
import {AuthContext} from "../../Context/AuthContext.jsx";


function Navbar () {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const {logout} = useContext(AuthContext)

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
                    <NavLink to='/' className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'} onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/activiteiten' className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'} onClick={closeMobileMenu}>
                        Activiteiten
                    </NavLink>
                </li>


                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}

                >
                    <NavLink to='/leeromgeving' className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'} onClick={closeMobileMenu}>
                        Leeromgeving <i className='fas fa-caret-down'/>
                    </NavLink>
                    {dropdown && <Dropdown />}
                </li>

                <li className='nav-item'>
                    <NavLink to='/profiel' className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'} onClick={closeMobileMenu}>
                        Profiel
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'} onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <Button type="button" buttonName="Activiteit toevoegen" linkto="/activiteit-toevoegen"/>
            <button type="button" onClick={logout}>Uitloggen</button>

        </nav>
        </header>
    )
}

export default Navbar;