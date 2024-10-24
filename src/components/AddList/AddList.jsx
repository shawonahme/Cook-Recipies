import PropTypes from 'prop-types';
import ListItem from './ListItem';
import CurrentItem from './CurrentItem';

const AddList = ({addList,myCurrentRep,prepar,timeCal,time,cal}) => {



// console.log(addList.recipe_name

    return (
        <div className=' md:basis-[38%] p-2'>
            

<h1 className='text-center text-xl font-semibold'>Want to cook: {addList.length}</h1>

 <div className='flex font-semibold py-3 justify-between'> 
    <p>Name</p>
    <p>Time</p>
    <p>Calories</p>
 </div>
  {addList.map((data,idx) =>  <ListItem timeCal={timeCal} myCurrentRep ={myCurrentRep} addList ={addList} data={data} key={idx}></ListItem>)}

  <h1 className='text-center py-2 text-xl font-semibold'>Currently cooking {prepar.length}</h1>

  <div className='flex font-semibold py-3 justify-between'>
    <p>Name</p>
    <p>Time</p>
    <p>Calories</p>
    
 </div>
 <div className='border-b-2'>
 {prepar.map((dt,idx) =>  <CurrentItem   myCurrentRep = {myCurrentRep} prepar ={prepar} data={dt} key={idx}></CurrentItem>)}
 
 </div>
 <div className='flex font-semibold py-3 justify-between'>
    <p></p>
    <p> Total Time: {time} min</p>
    <p>Calories:  {cal} cal</p>
    
 </div>


  

        


        </div>
    );
};

AddList.propTypes = {
    addList:PropTypes.object,
    myCurrentRep:PropTypes.func,
    prepar:PropTypes.objects,
    timeCal:PropTypes.func,
    time:PropTypes.number,
    cal:PropTypes.number
};

export default AddList;