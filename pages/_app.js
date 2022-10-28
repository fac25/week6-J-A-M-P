import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingBasket");
  }, []);

  return <Component {...pageProps} cart={cart} setCart={setCart} />;
}

export default MyApp;
