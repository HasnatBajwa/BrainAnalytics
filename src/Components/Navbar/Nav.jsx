import React, { useState } from 'react';
import Logo from "../../assets/company/Logo.png";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [isMenuClosed, setMenuClosed] = useState(true);

    return (
        <div className="nav-container" >
            <nav>
                <div className="nav-brand">
                    <Link to='/'><img src={Logo} alt="companylogo" className='company-logo' /></Link>
                </div>
                <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
                <div className="nav-links">
                    <Link to='/'><button className=" home">Home</button></Link>
                    <Link to='/Courses'><button className="nav-btn">Courses</button></Link>
                    <Link to='/Services'><button className="nav-btn">Services</button></Link>
                    <Link to='/ContactUs'><button className="nav-btn">Contact</button></Link>
                    <Link to='/'><button className="nav-btn">Blog</button></Link>
                    <Link to='/About'><button className="nav-btn">About</button></Link>
                </div>
            </nav>
            <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
                <div>
                    <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                    <div className="overlay-menu-wrapper">
                        <div className="overlay-menu">
                            <Link to='/'><button className=" home">Home</button></Link>
                            <Link to='/Courses'><button className="nav-btn">Courses</button></Link>
                            <Link to='/Services'><button className="nav-btn">Services</button></Link>
                            <Link to='/'><button className="nav-btn">Contact</button></Link>
                            <Link to='/'><button className="nav-btn">Blog</button></Link>
                            <Link to='/About'><button className="nav-btn">About</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;