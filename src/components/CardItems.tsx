import React from 'react';
import Card from './Card';

function CardItems(props:any) {
   
    const items = props.arrayCards.map((item,i)=>{
        return ( <Card key={i} item={item}/>)
    })

  return (
    <div className="cards container text-center">
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
        {items}
        </div>
    </div>
  );
}

export default CardItems;
