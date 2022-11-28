import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import useAdmin from '../page/UseAdmin';

const AdminRoute = ({children}) => {
const {user,loading} = useContext(AuthContext);
const [isAdmin] = useAdmin(user?.email)
const location = useLocation();
if(loading){
   return <div className='flex justify-center items-center mt-52'><progress className="progress w-56"></progress></div>
}
if(user && isAdmin){
    return children;
}    
return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;