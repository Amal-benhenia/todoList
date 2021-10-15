import React from 'react'


export default function ToDo ({task ,deleteHandler, doneHandler}){
    console.log(task)
    const deleteTodo=()=>{
        deleteHandler(task.id)
    }
    const doneTodo =() => {
        doneHandler(task.id)
    }
return(
    <div className ="todo_container">
      <h3 style={task.isDone? { backgroundColor:'black'}: {}}> {" "}{task.text} {" "}</h3>  
      <div>
      <button onClick ={deleteTodo}> Delete </button>
      <button onClick={doneTodo}> {task.isDone? "Undone": "Done"} </button>
      </div>
    </div>
)

}