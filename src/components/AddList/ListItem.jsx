import PropTypes from 'prop-types';

const ListItem = ({data,myCurrentRep,timeCal}) => {
    const {recipe_name,preparing_time,calories} = data;
    return (
        <div>

<div className='flex my-2 gap-2 text-sm justify-between'> 

    <p>{recipe_name}</p>
    <p>{preparing_time} min</p>
    <p>{calories} calories</p>
    <button onClick={()=>{myCurrentRep(data),timeCal(preparing_time,calories)}} className='py-2 px-3 rounded-full bg-green-500'>preparing</button>
 </div>
 
        </div>
    );
};

ListItem.propTypes = {
    data:PropTypes.object,
    myCurrentRep:PropTypes.func,
    timeCal:PropTypes.func
   
};

export default ListItem;