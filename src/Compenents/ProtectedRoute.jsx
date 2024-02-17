import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {useContext} from "react";

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
