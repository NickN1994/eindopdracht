import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext.jsx";
import infoShort from "../helpers/infoShort.js";
import {Link} from "react-router-dom";

function InformationBox({id, title, content}) {

    const {admin} = useContext(AuthContext);

    return (
        <div>
            <h2>{title}</h2>
            <p>{infoShort(content)}...</p>
            <div>
                {admin ?
                    <button type="button">
                        <Link to={`/spel-des-levens/${id}`}>Activiteit bewerken</Link>
                    </button>
                    :
                    <button type="button">
                        <Link to={`/spel-des-levens/${id}`}>Meer informatie</Link>
                    </button>}
            </div>
        </div>
)
}

export default InformationBox;