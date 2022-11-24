import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layOut/Main";
import Login from "../page/Login";

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
        }
    ]
  }  
]);