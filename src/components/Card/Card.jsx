import { useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import PropTypes from 'prop-types';


// import PropTypes from 'prop-type'

const Card = ({addList}) => {
 const [card,setCard] =useState([])
 useEffect(()=>{

    fetch('fake.json')
    .then(res=> res.json())
    .then(data =>setCard(data))
 },[])
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 justify-between gap-4 md:basis-[60%]">
            {card.map((card,idx) => <CardItem addList={addList} card={card} key={idx}></CardItem>)}
        </div>
    );
}

Card.propTypes = {
    addList: PropTypes.func  
  };
export default Card;