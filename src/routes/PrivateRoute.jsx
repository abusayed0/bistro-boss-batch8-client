import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    if(isLoading){
        return <p>Loading...</p>;
    }
    else if(!user) {
        return <Navigate to="/login" replace={true} state={{from: location}}/>;
    }
    return children;
};

export default PrivateRoute;