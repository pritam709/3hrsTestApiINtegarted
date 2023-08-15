
import React,{useRef} from "react";
import classes from "./AddTab.module.css";
const AddTab = (props) => {
   const nameRef= useRef();
   const desRef= useRef();
   const priceRef= useRef();
   const qRef= useRef();
  
  const  formSubmitHandler =(event)=>{
    event.preventDefault();
    const tab={
        // id:nameRef.current.value,
        name:nameRef.current.value,
        des:desRef.current.value,
        price:priceRef.current.value,
        q:qRef.current.value,
        
    }

    fetch("https://crudcrud.com/api/31cdf9a25fd4468c965943192a85a2dd/products",{
      method:"POST",
      body:JSON.stringify(tab),
      headers:{
        "content-type":"application/json"
      }
    }).then(res=>{
      console.log(res);
     window.location.reload();
      
    }).catch(err=>console.log(err))

    // props.onFormSubmit(Tab);

  }
  return (
    <form onSubmit={formSubmitHandler} className={classes["shoe-input"]}>
      <label>Tab Name:</label>
      <input ref={nameRef} type="text"></input>
      <label>Description:</label>
      <input ref={desRef} type="text"></input>
      <label>Price:</label>
      <input ref={priceRef} type="number"></input>
      <br></br>
      <label>Enter Quantity Available:</label>
      
      <input ref={qRef} type="number"></input>
     
      <button type="submit">Add Product</button>
    </form>
  );
};
export default AddTab;
