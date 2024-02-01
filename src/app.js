import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import Error from "./components/Error";
import { createBrowserRouter,  RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"))
const Applayout = () => {

    return <div className="app">
        <Header/>
        <Outlet/>
    </div>
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children:[
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/body",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"grocery",
                element:<Suspense fallback={<h1>LOADING.....</h1>}><Grocery/></Suspense>,
            }

        ],
        errorElement:<Error/>
    },
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
