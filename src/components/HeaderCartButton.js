import classes from './HeaderCartButton.module.css';
import { useContext } from "react"
import CartContext from "../Store/CartContext"
const HeaderCartButton = (props) => {
    const ctx=  useContext(CartContext);
    const noOfCartItems=ctx.items.reduce((curr,item)=>{
        return curr+item.q
    },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;