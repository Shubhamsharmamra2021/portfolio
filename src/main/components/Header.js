import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { FaMailBulk, FaSignOutAlt, FaUser, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../css/style.css';
import Nav from 'react-bootstrap/Nav';

import { BiLeftArrow } from "react-icons/bi";
import { Container, Row, Col, Image, Button} from 'react-bootstrap';




function Header() {
    return (
        
        <header className="pt-3" >
        <nav className="navbar" style={{padding:'10px'}}>
            <div className="login-icon" style={{padding:'0'}}>
               <Link to="/" className="create"> <a href="" style={{color:'#fff', marginRight:'0px', textDecoration:'none'}}>Create My PortFolio</a></Link>
               <Link to="/showportfolio" className="create"> <a href="" style={{color:'#fff', marginRight:'0px', textDecoration:'none'}}>Show My Portfolio</a></Link>
                <a href="" style={{color:'#fff', marginRight:'5px', textDecoration:'none'}}> lInkedIn</a>
                <a href="" style={{color:'#fff', marginLeft:'5px',textDecoration:'none'}}>GitHub</a>
           
            </div>

        </nav>
    </header>
    );
}


export default Header; 