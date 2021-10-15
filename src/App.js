
import './App.css';
import React from 'react'; 
import AddToDo from './components/addTodo';
import ToDoList from './components/todoList';
import {useState} from 'react';


function App() {
  const [ todos,setTodos]=useState([  
   { text: "30min workout", id:1, isDone: false},
   { text: "Checking emails", id:2, isDone: false},
   { text: "Make a presentation", id:3, isDone: false}])

const deleteHandler =(ID)=>{
  setTodos(
    todos.filter((el)=> el.id!==ID)
  )
};
const doneHandler = (ID)=>{
  setTodos(todos.map((el)=>(el.id===ID? {...el, isDone:!el.isDone}:el )))
}
const [input, setInput] = useState("");
const addHandler = (newTodo)=>{
  setTodos ([...todos,newTodo])
}
  return (
    <div className="App">
<h2> To do App </h2>
<AddToDo setInput={setInput} addHandler={addHandler} input={input}/>
<ToDoList todolist = { todos} deleteHandler={deleteHandler} doneHandler={doneHandler}/>

    </div>
  );
}






export default App;