import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route
            path="/product/:id"
            render={(routerProps) => <ProductScreen {...routerProps} />}
          />
          <Route
            path="/cart/:id?"
            render={(routerProps) => <CartScreen {...routerProps} />}
          />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
