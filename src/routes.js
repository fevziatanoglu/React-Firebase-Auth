import PrivateRoute from "./components/privateRoute";
import Home from "./pages/homePage/homePage";
import Login from "./pages/loginPage/loginPage";


const routes = [

    {
        path: "/",
        element: <Home />,
        auth: true
    },

    {
        path: "/login",
        element: <Login />
    }

    



];

// 
const authCheck = routes => routes.map(route => {
    // there is auth in the route
    if (route?.auth) {
        // check is there an user by PrivateRoute
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }

    return route;
}
)


export default authCheck(routes);

// export default routes;