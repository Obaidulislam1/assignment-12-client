import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import useAdmin from '../page/UseAdmin';

const NavbarItem = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const [isAdmin] = useAdmin(user?.email)
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            {
                isAdmin && <>
                    <li><Link to='/allUser'>All User</Link></li>
                </>
            }
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