import "./Button.css"
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button ({classname, type, buttonName, linkto}) {

    return (
        <>
        <button className={classname} type={type}><Link to={linkto}>{buttonName}</Link></button>
        </>
    )
}

export default Button;