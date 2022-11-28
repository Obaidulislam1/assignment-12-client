import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const NavbarItem = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            {
                user?.uid ? 
                <li><Link to='/login'>Log Out</Link></li>
                :
                <li><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default NavbarItem;