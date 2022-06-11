import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { CartProvider } from "react-use-cart";



ReactDOM.render(
  <React.StrictMode>
     <CartProvider>
    <Router>
      
      <App />
     
      
    </Router>
    </CartProvider>
 
</React.StrictMode>,
  document.getElementById("root")) ;
