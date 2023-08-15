import React,{ useReducer, useState,useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [fetchedCart,setFetchedCart]= useState([])

  useEffect(() => {
    
    async function fetchCartItems() {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/31cdf9a25fd4468c965943192a85a2dd/cart"
        );
       const  resData = await response.json();
        // for (let i = 0; i < resData.length; i++) {
        //   const obj = resData[i];
        //   ctx.addItem(obj);
        // }
        console.log(resData);
        setFetchedCart(resData);
      
      } catch (error) {
        console.log(error);
      }
    }
    
      fetchCartItems();
    
   
  },[fetchedCart]);
  const defaultCart = {
    items: fetchedCart,
    totalAmount: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      console.log(state.items);
      for (let i = 0; i < state.items; i++) {
        const obj = state.items[i];
        if (obj._id === action.item._id) {
          return {
            items: state.items,
            totalAmount: state.totalAmount,
          };
        }
      }

      // console.log(action.item);
      const newAmount = state.totalAmount + action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      );
      const existingCartItem = state.items[existingCartItemIndex];
      // console.log(existingCartItem);
      let updatedItems;
      if (existingCartItem) {
        let updatedItem;
        // if (action.item.q === 1) {
        updatedItem = {
          ...existingCartItem,
          q: existingCartItem.q + action.item.q,
        };
        // console.log(updatedItem);
        // }

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: newAmount,
      };
    }

    return defaultCart;
  };
  const addItemHandler = (item) => {
    dispatchFn({ type: "ADD", item: item });
  };

  const [initialCart, dispatchFn] = useReducer(cartReducer, defaultCart);
  const cartContext = {
    items: initialCart.items,
    totalAmount: initialCart.totalAmount,
    addItem: addItemHandler,
  };


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
