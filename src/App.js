// to call routes
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    // user info save in user.data
    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(routes);




    // if user is waiting for firebase
    // when user is waiting user: false
    if (!user) {
        return (<div style={{ color: "white" }}>
            Loading...
        </div>)
    }

    return user && (
        <>
            <ToastContainer
            />
            {showRoutes}
        </>
    );
}

export default App;
