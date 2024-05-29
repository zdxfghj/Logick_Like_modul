import React, { useState } from 'react';
import "../App.scss"


function Sidebar(props) {
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const handleToggle = (i:number) => {
        setActiveIndex(i);
      };

   
   const items = props.arrayTopic.map((item:string,i:number)=>{
        return (
            <div className={activeIndex === i ? "item_sidebar is_active"  : "item_sidebar "}  key={i} onClick={() => {props.addToStateArrayCards(item);handleToggle(i)}}>
                <h3>{item}</h3>
            </div>
            )
    })

  return (
    <div className="sidebar">
      <div className={activeIndex === -1 ? "item_sidebar is_active"  : "item_sidebar "}  onClick={() => {props.addToStateArrayCards();handleToggle(-1)}}>
        <h3>Все темы</h3>
      </div>
      {items}
    </div>
  );
}

export default Sidebar;