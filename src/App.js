import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";


import Home from "./components/Farmer";
import Login from "./components/Farmerlogin";
import Signup from "./components/signup";
import Farm, { farm } from './components/Farm';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Userlogin from "./components/Userlogin";
import User from "./components/User";
import Us from "./components/Us";
import { CartProvider } from "react-use-cart";

import Cart from "./components/cart";
function App() {
  return (
    <Container style={{ width: "100%" ,margin:0 ,padding:0 ,marginRight:0 }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
          <CartProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Farm/>} />
              <Route path='/login' element={<Login />} />
              <Route path="/Userlogin" element={<Userlogin />} />
              <Route path="/User" element={<User/>} />
              <Route path="/Us" element={<Us />} />
              <Route path="/cart" element={<Cart/>} />
            
              <Route path="/signup" element={<Signup />} />
              
            </Routes>
            </CartProvider>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
