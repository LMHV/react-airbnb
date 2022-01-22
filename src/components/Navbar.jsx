import React from 'react'
import airbnb_logo from '../images/airbnb-logo.png'

export default function Navbar() {

    return (
        <nav className='nav'>
            <img className='nav--logo' src={airbnb_logo} alt='logo'/>

        </nav>
    );
}