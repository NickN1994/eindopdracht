import './Navigation.css'
import logo from '/src/Pages/Navigation/Assets/LOGO-NICK-EN-KIRSTIE.png'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header className='outer-container-nav'>
            <nav>
                <div className='logoBox'>
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
                <ul>
                    <li><p><Link to='/'>Home</Link></p></li>
                    <li><p>Activiteiten</p></li>
                    <li><p>Leeromgeving</p></li>
                    <li><p>Profiel</p></li>
                    <li><p><Link to='/contact'>Contact</Link></p></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;