import React from 'react'
import {Navbar ,Container,Nav ,Card ,Row  }  from 'react-bootstrap'

import {useState ,useEffect  ,useContext} from 'react'; 
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import farmmart from './farmmart.png'
import { db } from "../context/firebase";
import {MoreVertIcon} from '@material-ui/icons'
import {HiShoppingBag } from "react-icons/hi";
import {Link} from "react-router-dom"
import Product from "./product"
function Main(props) {


  const { products, onAdd } = props;





  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    


  return (
    
    <> 
  
    

  <div className="content1">
  <Row xs={1} md={ 4} className="g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        </Row>
      </div>
      
    




  

<div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
       
      </div>
 </>


     
  )
}

export default Main