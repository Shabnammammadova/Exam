import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home/home.jsx"
import About from "../pages/About/about.jsx"
import Services from "../pages/Services/services.jsx"
import Products from "../pages/Products/products.jsx"
import Blog from "../pages/Blog/blog.jsx"
import Contact from "../pages/Contact/contact.jsx"
import DropDown from "../pages/DropDown/dropdown.jsx"
import Add from "../pages/Add/add.jsx"

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/dropdown",
                element:<DropDown/>
            },
            {
                path:"/add",
                element:<Add/>
            }
        ]
    }
]