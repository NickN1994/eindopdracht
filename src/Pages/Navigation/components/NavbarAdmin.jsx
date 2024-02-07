import {Link, NavLink} from "react-router-dom";
import logo from "../Assets/LOGO-NICK-EN-KIRSTIE.png";
import Dropdown from "../Dropdown.jsx";
import DropdownAdmin from "../DropdownAdmin.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../../../Context/AuthContext.jsx";
import "../NavbarAdmin.css";


function NavbarAdmin() {

    // const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const {logout} = useContext(AuthContext);

    // const handleClick = () => {
    //     setClick(!click);
    // }
    // const closeMobileMenu = () => {
    //     setClick(false);
    // }
    //
    const onMouseEnter = () => {
        setDropdown(true)

    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    return (
        <>
            <header className='outer-container-nav'>
                <nav className='navbar'>
                    <div className='logoBox'>
                        <Link to="/"><img src={logo} alt="Logo"/></Link>
                    </div>
                    {/*<div className="menu-icon" onClick={handleClick}>*/}
                    {/*    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>*/}
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
                                >Leeromgeving</NavLink>
                                {dropdown && <Dropdown/>}
                            </li>

                            <li>
                                <NavLink to={"/profiel"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Profiel</NavLink>
                            </li>

                            <li
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}>
                                <NavLink to={"/contact"}
                                         className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}
                                >Admin</NavLink>
                                {dropdown && <DropdownAdmin/>}
                            </li>

                            <li>
                                <button type="button" onClick={logout}>Uitloggen</button>
                            </li>


                        </ul>
                    </div>

                    {/*<ul className={click ? 'nav-menu active' : 'nav-menu'}>*/}
                    {/*    <li className='nav-item'>*/}
                    {/*        <NavLink to='/'*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Home*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}

                    {/*    <li className='nav-item'>*/}
                    {/*        <NavLink to='/activiteiten'*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Activiteiten*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}


                    {/*    <li className='nav-item'*/}
                    {/*        // onMouseEnter={onMouseEnter}*/}
                    {/*        // onMouseLeave={onMouseLeave}*/}

                    {/*    >*/}
                    {/*        <NavLink to='/leeromgeving'*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Leeromgeving <i className='fas fa-caret-down'/>*/}
                    {/*        </NavLink>*/}
                    {/*        {dropdown && <Dropdown/>}*/}
                    {/*    </li>*/}

                    {/*    <li className='nav-item'>*/}
                    {/*        <NavLink to='/profiel'*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Profiel*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}

                    {/*    <li className='nav-item'>*/}
                    {/*        <NavLink to='/contact'*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Contact*/}
                    {/*        </NavLink>*/}
                    {/*    </li>*/}

                    {/*    <li className='nav-item'*/}
                    {/*        // onMouseEnter={onMouseEnter}*/}
                    {/*        // onMouseLeave={onMouseLeave}*/}
                    {/*    >*/}
                    {/*        <NavLink to=''*/}
                    {/*                 className={({isActive}) => isActive ? 'nav-links-active' : 'nav-links-default'}*/}
                    {/*                 >*/}
                    {/*            Leeromgeving <i className='fas fa-caret-down'/>*/}
                    {/*        </NavLink>*/}
                    {/*        {dropdown && <DropdownAdmin/>}*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    {/*</div>*/}

                </nav>
            </header>
        </>

    )
}

export default NavbarAdmin;
