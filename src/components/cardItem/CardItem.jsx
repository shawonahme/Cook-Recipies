import PropTypes from 'prop-types';
import Ingreditent from './Ingreditent';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const CardItem = ({card,addList}) => {
     
      
      const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} =card;
    return (
        <div className='border-2 p-4 rounded-md'>
        <img className='rounded-md' src={recipe_image} alt="" />
        <h1 className='text-md font-semibold py-3'>{recipe_name}</h1>
        <p className='text-gray-500 py-3 text-sm leading-7'>{short_description}</p>
        
        <div className='border-y-2 py-4'>
        <p className='text-lg py-2 text-gray-800'>Ingredients: {ingredients.length}</p>

        {ingredients.map((item,idx) => <Ingreditent item = {item} key={idx}></Ingreditent>)}
        </div> 
          
       <div className='flex justify-between py-3'>
       <div className='flex text-gray-500 items-center gap-2'>
            <p className='text-xl'><IoMdTime />
            </p>
        <p>{preparing_time}</p>
            </div> 
            <div className='flex text-gray-500 items-center gap-2'>
            <p className='text-xl'><FaFire />
            </p>
        <p>{calories}</p>
            </div>  
              
       </div>
       <button onClick={()=>addList(card) } className='bg-green-400 rounded-full hover:bg-gray-300 transition-all mt-4  py-2 px-4 font-semibold'>Want to Cook</button>
        </div>
    );
};

CardItem.propTypes = {
  card: PropTypes.object,
  addList:PropTypes.func,
  item:PropTypes.array  
};

export default CardItem;