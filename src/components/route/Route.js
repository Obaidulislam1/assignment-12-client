import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layOut/Main";
import Login from "../page/Login";
import Service from "../page/Service";
import SignUp from "../page/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path: '/service/:category_id',
          element: <Service></Service>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.category_id}`)

        }
    ]
  }  
]);