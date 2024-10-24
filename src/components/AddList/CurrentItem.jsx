import PropTypes from 'prop-types';

const CurrentItem = ({data}) => {
    const {recipe_name,preparing_time,calories} = data;

    return (
        <div>
             

<div className='flex my-2 gap-2 text-sm justify-between'> 

    <p>{recipe_name}</p>
    <p>{preparing_time} min</p>
    <p>{calories} calories</p>
   
   
 </div>
        </div>
       
    );
};

CurrentItem.propTypes = {
    data:PropTypes.object,
  
   
   
};

export default CurrentItem;