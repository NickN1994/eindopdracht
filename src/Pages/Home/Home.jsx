import './Home.css'
import fotoHome from './Assets/VanuitHartenZiel0-aangepast-10-1-scaled.jpg'
import ActivityBox from "../../Compenents/ActivityBox.jsx";

function Home() {

    // onderzoeken hoe je een golf krijgt in je pagina

    return (
        <div className='outer-container'>
            <div className='inner-container colums'>

                    <section className='colum-one'>
                        <h1>Welkom (Naam gebruiker)</h1>
                        <ActivityBox/>

                    </section>
                    {/* HIER <figure> TAG ?? */}

                    <section className='colum-two'>
                            <img src={fotoHome} alt="Afbeelding Nick en Kirstie"/>
                    </section>
            </div>
        </div>

    // <div className='outer-container'>
    //     <div className='inner-container'>
    //         <div className='colums'>
    //             <section className='colum-one'>
    //                 <h1>test</h1>
    //             </section>
    //             <section className='colum-two'>
    //                 <div className='photobox'>
    //                     <img src={fotoHome} alt="Afbeelding Nick en Kirstie"/>
    //                 </div>
    //             </section>
    //         </div>
    //
    //     </div>
    // </div>
    )
}

export default Home;