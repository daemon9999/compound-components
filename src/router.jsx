import Components from "./pages/Components";
import Home from "./pages/Home";
import {createBrowserRouter} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/components",
        element: <Components/>
    }
])
export default router