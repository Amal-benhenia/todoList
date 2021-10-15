import React from 'react'
import {useState} from 'react'

export default function AddToDo ({setInput, addHandler, input}){
    
    const inputHandler = (e) => {
        setInput(e.target.value);
      };
    const addTodo =()=>{
     addHandler({text:input, isDone:false, id:Math.random()})
     setInput('')
     console.log(addHandler)
 }  
return(
    <div className='addtodo_container'>
     <input  type ='text' placeholder='add your task here' onChange={inputHandler} value={input}/>  
     <button onClick={addTodo}> Add </button> 
    </div>
)

}