import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurServices from "../Pages/OurServices/OurServices";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component: Home,
        },
        {
          path:"/ourStory",
          Component:AboutUs,
        },
        {
          path:"/register",
          Component: Register,
        },
        {
          path:"/login",
          Component:Login,
        },
        {
          path:"/contactUs",
          Component:ContactUs,
        },
        {
          path:"/ourServices",
          Component: OurServices,
        },
       
    ]
  },
]);