import HeaderCartButton from "./HeaderCartButton"
import classes from "./Header.module.css"
const Header=(props)=>{
    return (
      <div>
       <header className={classes.header}>
          <h1>Medicine  shop</h1>
          <HeaderCartButton onClick={props.showCart} />
        </header>
       
         
        
    </div>
    )
  }
  export default Header;