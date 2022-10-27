import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])
  // check if localStorage has shoppingCart
  // if yes = useState get initial value from localStorage
  // if not set to empty array
  return <Component {...pageProps} cart={cart} setCart={setCart} />;
}

export async function getStaticProps() {

}

export default MyApp;
