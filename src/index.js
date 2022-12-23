import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// domain:dev-02k020l65wqskiow.us.auth0.com
// clientid:A7QEBweYHk5YcJqMh8L8Nmk9UUvzti2k
root.render(
  <Auth0Provider
    domain="dev-02k020l65wqskiow.us.auth0.com"
    clientId="A7QEBweYHk5YcJqMh8L8Nmk9UUvzti2k"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
