import React from "react";
import "./ItemCounter.css"


const ItemCounter = ({list}) =>{
    return(
        <div>Checked {list.filter((elem)=>{return elem.checked  }).length} items </div>
    )
}
    
export default ItemCounter;
