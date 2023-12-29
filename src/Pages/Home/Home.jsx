import './Home.css'
import fotoHome from './Assets/VanuitHartenZiel0-aangepast-10-1-scaled.jpg'

function Home() {
    return (
        <div className='outer-container'>
            <div className='inner-container colums'>

                    <section className='colum-one'>
                        <h1>Welkom (Naam gebruiker)</h1>

                    </section>
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