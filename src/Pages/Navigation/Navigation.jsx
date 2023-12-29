import './Navigation.css'
import logo from '/src/Pages/Navigation/Assets/LOGO-NICK-EN-KIRSTIE.png'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header className='outer-container-nav'>
            <nav className='menuHeader'>
                <div className='logoBox'>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                <ul className='ulMenuHeader'>
                    <li className='liHeader'><p><Link to='/' className='linkHeader'>Home</Link></p></li>
                    <li className='liHeader'><p><Link to='/' className='linkHeader'>Activiteiten</Link></p></li>
                    <li className='liHeader'><p><Link to='/' className='linkHeader'>Leeromgeving</Link></p></li>
                    <li className='liHeader'><p><Link to='/' className='linkHeader'>Profiel</Link></p></li>
                    <li className='liHeader'><p><Link to='/contact' className='linkHeader'>Contact</Link></p></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;