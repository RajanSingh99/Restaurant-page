import { useState } from "react";

const Menu = () => {
    const [menu,setMenu]=useState([
        {title: "Aloo Noodles", price:50, type:"vegetarian",timeToCook:"40 minutes", id:1},
        {title:"Pork Noodles", price:95, type:"non-vegetarian", timeToCook:"60 minutes", id:2},
        {title:"Chicken Hakka Noodles",price:130, type:"non-vegetarian",timeToCook:"30 minutes", id:3},
        {title:"Lamb Broth Noodles",price:70,type:"non-vegetarian",timeToCook:"44 minutes",id:4}
    ]);
    
    return (
        <div className="menu">
            {menu.map((item)=>(
                <div className="menu-preview" key={item.id}>
                     <h2 style={{color:"#e1522b"}}>{item.title}</h2>
                     <h4 style={{color:"#f4cb92"}}>Price: {item.price}</h4>
                     <h4 style={{color:"#f4cb92"}}>Type: {item.type}</h4>
                     <h4 style={{color:'#f4cb92'}}>Time to prepare: {item.timeToCook}</h4>
                     <button onClick={(e) => e.target.parentElement.remove()}>Delete</button>
                </div>
            ))}
        </div>
      );
}
 
export default Menu;
