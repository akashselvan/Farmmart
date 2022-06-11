import React from 'react'
import {useState} from 'react'
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './farm.css';
import {Nav,Navbar ,Container } from "react-bootstrap";
import farmmart from './farmmart.png'
import { Button } from '@material-ui/core';




const Farm = () => {
 
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  
  return (
    
    <>

     <div className="body">
    

  


      
       
     <div className="container">
     <Navbar className="navbar123"  variant="dark">
    <Container>
    <img  className="img" src={farmmart}/>
    <Navbar.Brand href="#home">FarmMart</Navbar.Brand>
    <Nav className="me-auto">
      
    
    </Nav>
    </Container>
  </Navbar>
     <div className="logins">
        <div className="btn123">
        <Link to="/Login">
     <Button  className="pulsingButton" variant="outlined">log in as a farmer</Button>
        </Link>
       
     </div>
     {/* <div className="btn123">
        <Link to="/Userlogin">
     <Button  className="pulsingButton" variant="outlined">log in as a farmer</Button>
        </Link>
       
     </div> */}
    
     </div>
    
    </div>
    </div>
    
</>
 
  )
}




 

export default Farm;
