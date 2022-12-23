import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  CheckOut,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route
            exact
            path="/products/:id"
            children={<SingleProduct />}
          ></Route>
          <PrivateRoute exact path="/checkout">
            <CheckOut />
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route> */}

        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
