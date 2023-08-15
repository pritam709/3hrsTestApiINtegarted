import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
// import './App.css';
import AddTab from "./components/AddTab";
import CartProvider from "./Store/CartProvider";
import Cart from "./Cart/Cart";

function App() {
  const [tabsArray, setTabArray] = useState([]);

  useEffect(() => {
    const fetchTabs = async () => {
      const response = await fetch(
        "https://crudcrud.com/api/31cdf9a25fd4468c965943192a85a2dd/products"
      );

      const resData = await response.json();
      // console.log(resData);
      setTabArray(resData);
    };

    fetchTabs();
  }, []);

  const [cartIsShown, setCartIsShown] = useState(false);
  const showcCartHandler = () => {
    return setCartIsShown(true);
  };
  const hideCartHandler = () => {
    return setCartIsShown(false);
  };
  return (
    <CartProvider className="App">
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header showCart={showcCartHandler} />
      <AddTab  />
      <Tabs array={tabsArray} />
    </CartProvider>
  );
}

export default App;


