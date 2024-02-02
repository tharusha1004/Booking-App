import React from 'react'
import '../navbar/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <span className='logo'>MyGaman.com</span>
                <div className='navItems'>
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar