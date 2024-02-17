import MeditationArray from "../../../Compenents/MeditationArray.js";
import {Link} from "react-router-dom";


function Meditations() {


    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Meditaties Land van Licht</h1>
                <p>Klik op één van de thema's om de meditatie te beluisteren. Deze kun je doen op het opstellingsveld van Het Land van Licht</p>

                <ul>
                    {MeditationArray.map((meditation, index) => {
                        return (
                            <li key={index}>
                                <p>
                                    <Link to={`/meditaties/${meditation.id}`}>{meditation.title}</Link>
                                </p>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Meditations;