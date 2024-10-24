
import { useState } from 'react'
import './App.css'
import AddList from './components/AddList/AddList'
import Bannar from './components/Bannar/Bannar'
import Card from './components/Card/Card'
import Heading from './components/Heading/Heading'
import Navbar from './components/navbar/Navbar'


function App() {

  //want too cook function
 
  const [addlist,setList] = useState([])

  const addList = (data)=>{

    const myIDFind = addlist.find(myId => myId.recipe_id === data.recipe_id);
    

    if(myIDFind){
      alert('This button already has been')
    }
    else{
      const newList = [...addlist,data];
            setList(newList)
    }
    

    
  }
  const [prepar,setprepar] =useState([])
const myCurrentRep =(data) =>{

//remove item from want cook 
const updaterep = addlist.filter(id=>id.recipe_id !== data.recipe_id);
setList(updaterep)
// console.log(updaterep)
//add item current cook
const delrep  = addlist.find((id)=>id.recipe_id === data.recipe_id)

setprepar([...prepar,delrep])




}
  const [time,setTime] = useState(0)
  const [cal,setCal] = useState(0)

  const timeCal = (times,cals)=>{
    const newtime = time+ times
    const newcal = cal+ cals
    setTime(newtime)
    setCal(newcal)
    // console.log(time)
  }
  console.log(time)

  return (
    <>
    {/* header */}
      <header className='w-[80%] mx-auto'>
        <Navbar></Navbar>
      </header>
      {/* main */}
      <main>
        {/* bannar */}
        <Bannar></Bannar>

        {/* heading  */}
        <Heading></Heading>


       <div className=' flex:col md:flex justify-between w-[80%] mx-auto'>
        <Card addList = {addList}></Card>
        <AddList prepar={prepar} myCurrentRep={myCurrentRep} timeCal={timeCal} time={time} cal={cal} addList ={addlist}></AddList>

       </div>
        

      </main>
  
    </>
  )
}

export default App
