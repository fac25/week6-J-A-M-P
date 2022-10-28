import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shoppingBasket"));
    setCart(savedCart);
  }, []);

  return <Component {...pageProps} cart={cart} setCart={setCart} />;
}

export default MyApp;
