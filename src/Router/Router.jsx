import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/product",
                element:<Home/> 
            },
            {
                path:"/about",
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Home/>
            },
            {
                path:"/contact",
                element:<Home/>
            }
        ]
    }
])
export default router;