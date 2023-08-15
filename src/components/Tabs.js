import classes from "./Shoes.module.css"
import Item from "./Item";
const Tabs=(props)=>{

    return (
        <div className={classes.shoes}>
          <ul>
            {props.array.map((item) => (
              <Item
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                des={item.des}
                q={item.q}
                
              />
            ))}
          </ul>
        </div>
      );

}
export default Tabs;