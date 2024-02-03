import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";


function ProtectetRoute ({children}) {

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!auth.isAuth) {
        return navigate("/login")
    }

    return children;

}

export default ProtectetRoute;