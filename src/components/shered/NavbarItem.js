import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const NavbarItem = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err));
    }
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            {
                user?.uid ? 
               <>
               <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogout}>Log out</button></li>
               </>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default NavbarItem;