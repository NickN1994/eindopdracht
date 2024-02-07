import "./Button.css"
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button ({type, buttonName, linkto}) {

    return (
        <>
        <button className="btn" type={type}><Link to={linkto}>{buttonName}</Link></button>
        </>
    )
}

export default Button;