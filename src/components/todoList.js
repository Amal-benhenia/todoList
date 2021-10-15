import React from 'react'
import ToDo from './todo'

export default function ToDoList ({todolist ,deleteHandler, doneHandler}){
return(
    <div className="todolist_container">
      <h2> To do list</h2>
      {todolist.map((el)=> (<ToDo task= {el} deleteHandler={deleteHandler} doneHandler={doneHandler}/>))}
      
    </div>
)

}