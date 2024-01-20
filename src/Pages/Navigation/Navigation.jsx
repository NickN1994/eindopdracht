// import './Navigation.css'
// import logo from '/src/Pages/Navigation/Assets/LOGO-NICK-EN-KIRSTIE.png'
// import {Link, NavLink} from 'react-router-dom';
// import DropdownMenu from "./DropdownMenu.jsx";
// import {useState} from "react";
// import dropdown from "./Assets/icons8-sort-down-24.png"
//
// function Navigation() {
//
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//
//     const toggleDropdown = () => {
//         setDropdownOpen(!isDropdownOpen);
//     };
//
//
//     return (
//         <header className='outer-container-nav'>
//             <nav className='menuHeader'>
//                 <div className='logoBox'>
//                     <Link to="/"><img src={logo} alt="Logo"/></Link>
//                 </div>
//                 <ul className='ulMenuHeader'>
//                     <li><NavLink to='/'
//                                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink>
//                     </li>
//                     <li><NavLink to='/activiteiten'
//                                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Activiteiten</NavLink>
//                     </li>
//
//                     <li><div
//                         className={`dropdown-container ${isDropdownOpen ? 'active' : ''}`}
//                         onMouseEnter={toggleDropdown}
//                         onMouseLeave={toggleDropdown}
//
//                     >
//                         <NavLink to=''
//                                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Leeromgeving <img
//                             src={dropdown} alt=""/></NavLink>
//                         {isDropdownOpen && <DropdownMenu/>}
//                     </div>
//                     </li>
//
//                     <li><NavLink to='/login-registreren'
//                                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Profiel</NavLink>
//                     </li>
//                     <li><NavLink to='/contact'
//                                  className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}>Contact</NavLink>
//                     </li>
//                 </ul>
//                 <button type='button'><Link to='/activiteit-toevoegen'>Activiteit toevoegen</Link></button>
//             </nav>
//
//         </header>
//     )
// }
//
// export default Navigation;