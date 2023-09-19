import React from 'react'
import { NavLink, Link } from "react-router-dom"
import Logo from "../Images/Guardigli-logo.webp"

const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location
    return pathname === "/";
}

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt='logo' style={{maxHeight: '60px'}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={`${checkActive() ? 'active nav-link' : 'nav-link'}`} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={`${checkActive() ? 'active nav-link' : 'nav-link'}`} isActive={checkActive} >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={`${checkActive() ? 'active nav-link' : 'nav-link'}`} isActive={checkActive} >Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
