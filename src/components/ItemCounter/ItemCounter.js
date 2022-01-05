import React from "react";
import "./ItemCounter.css"


const ItemCounter = ({list}) =>{
    return(
        <div className="taskCounter"> {list.filter((elem)=>{return elem.checked  }).length} Tasks completed  </div>
    )
}
    
export default ItemCounter;
