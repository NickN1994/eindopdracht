import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer>
            <div className='inner-container-footer'>
                <section className='footerDetails'>
                    <h2>Contact</h2>
                    <ul>

                        <li>
                            <div className='contactInfoBox'>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='adres'>
                                    <p>Heibloemdijk 1</p>
                                    <p>5688 JV Oirschot</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='contactInfoBox'>
                                <i className="fa-solid fa-phone"></i>
                                <p>+316 57 34 62 57</p>
                            </div>
                        </li>

                        <li>
                            <div className='contactInfoBox'>
                                <i className="fa-solid fa-envelope"></i>
                                <p>info@nickenkirstie.nl</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <nav className='footerMenu'>
                    <h2>Menu</h2>
                    <ul className='ulFooterMenu'>
                        <li><p><Link to='/' className='linkFooterFooter'>Home</Link></p></li>
                        <li><p><Link to='/' className='linkFooter'>Activiteiten</Link></p></li>
                        <li><p><Link to='/leeromgeving' className='linkFooter'>Leeromgeving</Link></p></li>
                        <li><p><Link to='/' className='linkFooter'>Profiel</Link></p></li>
                        <li><p><Link to='/contact' className='linkFooter'>Contact</Link></p></li>
                    </ul>
                </nav>

                <section className="footerDetails">
                    <h2>Follow us</h2>
                    <ul>

                        <li><div className='contactInfoBox'>
                            <i className="fa-brands fa-facebook"></i>
                            <p><a href="https://www.facebook.com/nickenkirstieschooloflight">Facebook</a></p>
                        </div></li>

                        <li><div className='contactInfoBox'>
                            <i className="fa-brands fa-square-instagram"></i>
                            <p><a href="https://www.instagram.com/nickenkirstie_spiritueelleraar/">Instagram</a></p>
                        </div></li>

                        <li><div className='contactInfoBox'>
                            <i className="fa-brands fa-linkedin"></i>
                            <p><a href="https://www.linkedin.com/in/nickenkirstie/">Linkedin</a></p>
                        </div></li>
                    </ul>
                </section>

            </div>
            <div className='privacy'>
                <a href="https://nickenkirstie.nl/wp-content/uploads/2021/06/Algemene-voorwaarden-april-2021.pdf">
                    <p>Algemene Voorwaarden</p></a>
                <a href="https://nickenkirstie.nl/wp-content/uploads/2021/06/Privacy-beleid-juni-2021-1.pdf"><p>Privacy
                    Beleid</p></a>
            </div>

        </footer>
    )
}

export default Footer;