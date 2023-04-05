import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {

    const user = useSelector(state => state.auth.user.data);
    // there is no user => navigate login page!
    if (!user) {
        return <Navigate to="/login" replace={true} />
    }

    return children;

}