

import Home from './pages/Home';
import About  from './pages/About';

const routes = [
    {
        path: "/",
        element: <Home />,
        title: "Inicio"
    },
    {
        path: "/about",
        element: <About />,
        title: "Acerca de"
    }
];

export default routes;