import {Link} from "react-router-dom";


function pageNotFound () {

    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h2>De pagina die je bezoekt bestaat niet</h2>
                <div><button type='button'><Link to="/" >Ga terug naar Home</Link></button></div>
            </div>
        </div>
    )
}

export default pageNotFound;