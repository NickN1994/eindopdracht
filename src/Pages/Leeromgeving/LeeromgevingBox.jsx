import {Link} from "react-router-dom";


function LeeromgevingBox({id, info, url, title}) {


    return (
        <div className="activity-box">
            <h2>{title}</h2>
            <p>{info}</p>
            <Link to={`/${url}`} className="btn btn-orange">Naar {title}</Link>
        </div>
    )
}

export default LeeromgevingBox;