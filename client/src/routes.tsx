import Brand from "./pages/Brand";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Register from "./pages/Register";

export const routes = [
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/product',
        element: <Product />
    },
    {
        path: '/brand',
        element: <Brand />
    },
];