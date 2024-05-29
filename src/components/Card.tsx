import React from 'react';
import "../App.scss"
import imageToAdd from "./../illu.png";
import CSS from "csstype";



function Card(props) {
  const imgStyles: CSS.Properties ={
    backgroundColor : props.item.bgColor 
  }
  

  return (
    <div className='col'>
    <div className="card ">
      <img alt="logo" src= {props.item.image}  style={imgStyles}/>
      <div className="item_card">
        <h3>{props.item.name}</h3>
      </div>
     
    </div>
    </div>
  );
}

export default Card;