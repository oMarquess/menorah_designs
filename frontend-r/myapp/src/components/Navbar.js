import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-md">
    
    <Link class="navbar-brand" to="/" style={{fontFamily:'Cinzel serif' }}>MENORAH DESIGNS</Link>
    </div>
    </nav>
    
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link className="navbar-brand" to='/'>Menorah Designs</Link>
    //     <button 
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //     >
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //             <li className="nav-item active">
    //                 <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
    //             </li>
    //             <li className="nav-item">
    //                 <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
);



export default navbar;