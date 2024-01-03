import './Footer.css'
import {Link} from "react-router-dom";
import location from "./Assets/location.png"
import email from "./Assets/email.png"
import phone from "./Assets/phone.png"
import fb from "./Assets/fb.png"
import insta from "./Assets/insta.png"
import linkedin from "./Assets/linkedin.png"
import FooterDetails from "./components/FooterDetails.jsx";

function Footer () {
    //   ALGEMENE VOORWAARDEN EN PRIVACY BELEID ONDER DE FOOTER NOG MAKEN
    return(
        <footer>
            <div className='inner-container-footer'>
               <section className='footerDetails'>
                   <h2>Contact</h2>
                   <ul>

                       <li><div className='contactInfoBox'>
                           <img src={location} alt="locatie" className='footerIcon'/>
                           <div className='adres'>
                               <p>Heibloemdijk 1</p>
                               <p>5688 JV Oirschot</p>
                           </div>
                       </div></li>

                       <li><div className='contactInfoBox'>
                           <img src={phone} alt="phone" className='footerIcon'/>
                           <p>+316 57 34 62 57</p>
                       </div></li>

                       <li><div className='contactInfoBox'>
                           <img src={email} alt="email" className='footerIcon'/>
                           <p>info@nickenkirstie.nl</p>
                       </div></li>
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
                        {/*<FooterDetails*/}
                        {/*    image={fb}*/}
                        {/*    alt='facebook'*/}
                        {/*    socialLink='https://www.facebook.com/nickenkirstieschooloflight'*/}
                        {/*    social='Facebook'*/}
                        {/*/>*/}

                        {/*<FooterDetails*/}
                        {/*    image={insta}*/}
                        {/*    alt='Instagram'*/}
                        {/*    socialLink='https://www.instagram.com/nickenkirstie_spiritueelleraar/'*/}
                        {/*    social='Instagram'*/}
                        {/*/>*/}

                        {/*<FooterDetails*/}
                        {/*    image={linkedin}*/}
                        {/*    alt='Linkedin'*/}
                        {/*    socialLink='https://www.linkedin.com/in/nickenkirstie/'*/}
                        {/*    social='Linkedin'*/}
                        {/*/>*/}

                        <li><div className='contactInfoBox'>
                            <img src={fb} alt="facebook" className='footerIcon'/>
                            <p><a href="https://www.facebook.com/nickenkirstieschooloflight">Facebook</a></p>
                        </div></li>

                        <li><div className='contactInfoBox'>
                            <img src={insta} alt="phone" className='footerIcon'/>
                            <p><a href="https://www.instagram.com/nickenkirstie_spiritueelleraar/">Instagram</a></p>
                        </div></li>

                        <li><div className='contactInfoBox'>
                            <img src={linkedin} alt="email" className='footerIcon'/>
                            <p><a href="https://www.linkedin.com/in/nickenkirstie/">Linkedin</a></p>
                        </div></li>
                    </ul>
                </section>

            </div>

        </footer>
    )
}

export default Footer;