import './Navigation.css'
import logo from '/src/Pages/Navigation/Assets/LOGO-NICK-EN-KIRSTIE.png'
import {Link, NavLink} from 'react-router-dom';



function Navigation() {
    return (
        <header className='outer-container-nav'>
            <nav className='menuHeader'>
                <div className='logoBox'>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                <ul className='ulMenuHeader'>
                    <li className='liHeader'><p><NavLink to='/' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Home</NavLink></p></li>
                    <li className='liHeader'><p><NavLink to='/activiteiten' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Activiteiten</NavLink></p></li>
                    <li className='liHeader'><p><NavLink to='/leeromgeving' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Leeromgeving</NavLink></p>
                        <ul>
                            <li className='liHeader'><p><NavLink to='/leeromgeving' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Meditaties opstellingsveld</NavLink></p></li>
                        </ul>
                    </li>
                    <li className='liHeader'><p><NavLink to='/login-registreren' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Profiel</NavLink></p></li>
                    <li className='liHeader'><p><NavLink to='/contact' className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}>Contact</NavLink></p></li>
                </ul>
                <button type='button'><Link to='/activiteit-toevoegen'>Activiteit toevoegen</Link></button>
            </nav>
        </header>
    )
}

export default Navigation;