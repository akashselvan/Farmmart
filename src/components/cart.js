import React from 'react'
import {Navbar ,Container,Nav ,Card ,Row  }  from 'react-bootstrap'
import {useState ,useEffect } from "react"
import {Link}  from "react-router-dom"
import { useCart } from "react-use-cart";
import farmmart from './farmmart.png'
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./cart.css"



import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {HiShoppingBag } from "react-icons/hi";
import { getBottomNavigationActionUtilityClass } from '@mui/material';
function Cart() {

  const { totalItems} = useCart();


  const { isEmpty, items, updateItemQuantity, cartTotal, emptyCart ,removeItem,} =
    useCart();
//     const[ products ,setProducts] = useState([]);
//   useEffect(() => {
//     const products1 = async () => {
//      const data = await getDocs(usersCollectionRef);
//      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     console.log(products);

     
//    };

//   products1();
// }, []);

//  const [image1 ,setImage1] = useState("");
//  const [crop1 ,setCrop1] = useState("");
//  const [price1 ,setPrice1] = useState("");
//  const [cartItems, setCartItems] = useState([]);
//  const onAdd = (product) => {
//    const exist = cartItems.find((x) => x.id === product.id);
//    if (exist) {
//      setCartItems(
//        cartItems.map((x) =>
//          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
//          console.log(cartItems)
//        )
//      );
//    } else {
//      setCartItems([...cartItems, { ...product, qty: 1 }]);
//    }
//  };
//  const onRemove = (product) => {
//    const exist = cartItems.find((x) => x.id === product.id);
//    if (exist.qty === 1) {
//      setCartItems(cartItems.filter((x) => x.id !== product.id));
//    } else {
//      setCartItems(
//        cartItems.map((x) =>
//          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//        )
//      );
//    }
//  };

  

 const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_test_AKIF1rrDdJe2y6",
    currency: "INR",
    amount: amount * 100,
    name: "farmarrt",
    description: "Thanks for purchasing",
    image:
      "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");
    },
    prefill: {
      name: "akash",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
    
 
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
      <Link to="/user">
    <img  className="img" src={farmmart}/></Link>

    <Navbar.Brand href="#home">FarmMart</Navbar.Brand>
    <Nav className="me-auto">
      <div className=" "> <button  className="third"   >
        <h5 className="log">logout</h5>  </button></div>
    
    </Nav>
    <Link to="/cart" className="link">
                <div   className="header-option-basket">
                    <HiShoppingBag    className="header-basket-icon" />
                    <span className="header-option-two header-basket-count">{totalItems > 0 ? totalItems : ""}{" "}
            {totalItems < 1 ? "Add product" : totalItems > 1 }</span>
                </div>
            </Link>
    </Container>
  </Navbar>
 
             

    {items.map((item) => (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={item.image}
        alt="item"
      />
      <div className="cartItem__details">
        <p className="details__title">{item.crop}</p>
        
        <p className="details__price">$ {item.price}</p>
      </div>
      <div className="details">
                <button
                  id="quantity_btn_decrease"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                  <h4> {item.quantity}</h4>
                {/* Button for increasing the quantity */}
                <button
                  id="quantity_btn_increase"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
            
              <span>₹{item.quantity * item.price}.00</span>
              </div>
            
    </div>
     




    ))}
     <div className="cart_total_group">
          <p>Cart Total ₹{cartTotal}/- </p>
          <button onClick={() => displayRazorpay(cartTotal)}>
                BUY NOW
              </button>
          <button className="empty_cart_btn" onClick={emptyCart}>
            Empty Cart
          </button>
        </div>
      
</>
  )
}

export default Cart