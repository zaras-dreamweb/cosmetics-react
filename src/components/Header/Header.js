import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    // Pathname has been destructured as it is an array
    const { pathname } = useLocation();
    return (
        <div>

            <nav style={pathname.includes("cosmetic") ? { display: 'none' } : { display: 'flex' }} className='h-14 font-semibold bg-gradient-to-r from-red-500 to-orange-400 justify-end items-center'>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/order'>Order</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/address'>Address</NavLink>

            </nav>
        </div>
    );
};

export default Header;