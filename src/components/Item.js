import React, { useContext, useEffect, useState } from "react";
import cartContext from "../Store/CartContext";
import classes from "./Item.module.css";
const Item = (props) => {
  const [large, setLarge] = useState(props.q);
  const quan = +large;
  const price = +props.price;
  const ctx = useContext(cartContext);
  const noOfCartItems=ctx.items.reduce((curr,item)=>{
    return curr+item.q
},0)

  
 
  const addItemToCart = (id) => {
    if (large === 0) {
      return;
    }
    setLarge((prev) => prev - 1);
    const newObj = {
      name: props.name,
      des: props.description,
      price: price,
      q: quan - 1,
    };

    fetch("https://crudcrud.com/api/31cdf9a25fd4468c965943192a85a2dd/products/"+id,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      }
    ).then((res) => {
      console.log(res);

      fetch("https://crudcrud.com/api/31cdf9a25fd4468c965943192a85a2dd/cart",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...newObj,q:1}),
        }
      ).then(res=>console.log(res));
    });
    //

    ctx.addItem({
      id: props.id,
      name: props.name,
      price: price,
      q: 1,
    });
  };

  return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.des}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.btn}>
        <button onClick={addItemToCart.bind(null, props.id)}>
          <span>ADD TO Cart/Bill </span>
        </button>
        <p>Quantity Available: {large === 0 ? "out of stock" : large}</p>
      </div>
    </li>
  );
};

export default Item;
