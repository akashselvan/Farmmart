import React from "react";
import {useState ,useEffect  ,useContext} from 'react'; 
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import './userpage.css'
import {Navbar ,Container,Nav ,Card ,Row  }  from 'react-bootstrap'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';

import Main from './Main';



import farmmart from './farmmart.png'
import { db } from "../context/firebase";
import {MoreVertIcon} from '@material-ui/icons'
import {HiShoppingBag } from "react-icons/hi";
import {
  collection,
  getDocs,
  addDoc,


  doc,
} from "firebase/firestore";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Product from './product.js'
import Cart from './cart.js'
const User = () => {
  const {user1 } = useUserAuth();
  const { totalItems, cartTotal } = useCart();

  const [products, setProducts] = useState([]);

  const usersCollectionRef = collection(db, "farmers");

const [users, setUsers] = useState([]);  

  const [item1 ,setItem1] = useState([]);



  useEffect(() => {
    const fetchProduct = async () => {
      // this code was fetching the data from the API I created
      // const { data } = await axios.get("http://localhost:3300/product");
      // setProduct(data.products);

      const fetchedProduct = await getDocs(collection(db, "farmers"));
      fetchedProduct.forEach((doc) => {
        let docItem = {
          id: doc.id,
          ...doc.data(),
        };
        setUsers((item) => [...item, docItem]);
      });
    };
    fetchProduct();
  }, []);



  const [image1 ,setImage1] = useState("");
  const [crop1 ,setCrop1] = useState("");
  const [price1 ,setPrice1] = useState("");
  const [cartItems, setCartItems] = useState([]);
  
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
    
    <Navbar className="navbar123"  variant="dark">
    <Container>
    <img  className="img" src={farmmart}/>
    <Navbar.Brand href="#home">FarmMart</Navbar.Brand>
    <Nav className="me-auto">
      <div className=" "> <button  className="third"   onClick={handleLogout}>
        <h5 className="log">logout</h5>  </button></div>
    
    </Nav>
    <Link to="/cart" className="link">
                <div   className="header-option-basket">
                    <HiShoppingBag    className="header-basket-icon" />
                    <span className="header-option-two header-basket-count">{totalItems}</span>
                </div>
            </Link>
    </Container>
  </Navbar>
 
  <Row xs={1} md={ 4} className="g-4">
      {users.map((item, id) => (
      
        <Product key={id} {...item} item={item} />
       
      ))}
</Row>
  
</>
    );
};

export default User;