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
                    <li><p><Link to='/' className='link'>Home</Link></p></li>
                    <li><p><Link to='/' className='link'>Activiteiten</Link></p></li>
                    <li><p><Link to='/' className='link'>Leeromgeving</Link></p></li>
                    <li><p><Link to='/' className='link'>Profiel</Link></p></li>
                    <li><p><Link to='/contact' className='link'>Contact</Link></p></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;