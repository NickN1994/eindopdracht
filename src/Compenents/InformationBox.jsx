import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext.jsx";
import infoShort from "../helpers/infoShort.js";
import {Link} from "react-router-dom";

function InformationBox({id, title, content}) {

    const {admin} = useContext(AuthContext);

    return (
        <div className='activity-box'>
            <h2>{title}</h2>
            <p>{infoShort(content)}...</p>
            <div>
                {admin ?

                        <Link to={`/spel-des-levens/${id}`} className="btn btn-orange">Activiteit bewerken</Link>

                    :

                        <Link to={`/spel-des-levens/${id}`} className="btn btn-orange">Meer informatie</Link>
                    }
            </div>
        </div>
)
}

export default InformationBox;