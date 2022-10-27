import "../styles/globals.css";
import { useState, useEffect } from "react";


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingBasket')

    console.log(JSON.parse(savedCart))
  }, [])

  // const [cart, setCart] = useState([])

  // check if localStorage has shoppingCart
  // if yes = useState get initial value from localStorage
  // if not set to empty array
  return <Component {...pageProps} cart={cart} setCart={setCart} />;
}

export default MyApp;
