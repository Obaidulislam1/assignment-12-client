import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>item 2</Link></li>
            <li><Link>Login</Link></li>
        </>
    );
};

export default NavbarItem;