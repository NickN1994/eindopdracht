import "./Navbar.css"
import Dropdown from "./Dropdown.jsx"
import {Link, NavLink} from "react-router-dom";
import logo from "./Assets/LOGO-NICK-EN-KIRSTIE.png";
import {useState} from "react";
import Button from "../../Compenents/Button.jsx";





function Navbar () {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

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

  // HAMBURGER dropdown menu komt nog niet in beeld.

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
                    <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/activiteiten' className='nav-links' onClick={closeMobileMenu}>
                        Activiteiten
                    </NavLink>
                </li>

                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}

                >
                    <NavLink to='/leeromgeving' className='nav-links' onClick={closeMobileMenu}>
                        Leeromgeving <i className='fas fa-caret-down'/>
                    </NavLink>
                    {dropdown && <Dropdown />}
                </li>

                <li className='nav-item'>
                    <NavLink to='/profiel' className='nav-links' onClick={closeMobileMenu}>
                        Profiel
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <Button type="type" buttonName="Activiteit toevoegen"/>
        </nav>
        </header>
    )
}

export default Navbar;