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
                    <li><p>Home</p></li>
                    <li><p>About me</p></li>
                    <li><p>Ervaring</p></li>
                    <li><p>Portfolio</p></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;