import React, { useRef } from 'react'
import { useState } from 'react';

import {IoMdAddCircleOutline} from 'react-icons/io';

import {FaEdit} from 'react-icons/fa';

import {AiTwotoneDelete} from 'react-icons/ai';

import './Add.css';

export default function Add() {
 
    const [Name,setName]=useState([]);

   const [addEle,setEle]=useState("");
   const [eleid,setId] =useState("");

   const [toggle,settoggle] = useState(false);

   const ele=useRef("");

   const [filter,setFilter]=useState("");



   function handleSearch(value){
    setFilter(value);
   }


   function itemChange(e){
    setEle(e.target.value);
    
   }
   
   
function display(e){

    e.preventDefault();
    if(addEle !==''){

  ele.current.value='';

if(toggle===false){
    setName( (previousState) => {
      return [...previousState, addEle]
});
}
else{

  setName(Name.map((ele,id)=>{
    if(id===eleid){
      return Name[id]=addEle;
    }
    return ele;
  }))
  settoggle(false);
}
    }
//  settoggle(false);

setEle("");
}
  
// Assuming you have a state variable called 'todos' and a function called 'setTodos' to update the state

function edit(index){
 
let findEle= Name.find( (todo,id)=>{
return id===index
}


);
settoggle(true);

setEle(findEle);
setId(index);

}

function remove(index){
 
  setName((previousState)=>{
    return previousState.filter((data,id)=>{
      return id !==index;
    })
  })
}
  
  return (
    <div className='main'>

     <div className='form'>
      <div>
      <input className='input' ref={ele} value={addEle}  onChange={itemChange} name='name'></input>
</div>
<div>
      <button onClick={display}>< IoMdAddCircleOutline/></button>
     </div> 

     <div>
     <input type='text' placeholder='Search Results' onChange={(e)=>handleSearch(e.target.value)} ></input>
     </div>
      </div>

      <div>
        
        {Name.filter((item)=>{
          return filter.toLowerCase() === ""? item :
          item.toLowerCase().includes(filter.toLowerCase())
        })
          .map( (data,index) =>{
         
          return <div className='same'>
          <div key={index}>
           
             {data} </div>

          <div className='icon'>
          <button onClick={()=>edit(index)}><FaEdit/></button>
          <button onClick={()=>remove(index)}><AiTwotoneDelete/></button>
          </div>

          </div>
        }
     
        )}
      
      </div>

    </div>
  )
}
