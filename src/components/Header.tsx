import React from 'react';
import logo from './../../public/clarion-horn.png';

function Header() {
    return (
        <>
            <h1> Header for Clarion Studios </h1>
            <img src={logo} alt="Logo" />;
        </>
    );
}

export default Header;