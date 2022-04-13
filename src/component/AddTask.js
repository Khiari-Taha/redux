import AddTask from './AddTask.css';
import React, {useState} from "react";
import { useDispatch } from "react-redux";

const Input =() => {

        const [todoText, setTodotext]= useState("");
        const dispatch = useDispatch();
        const addtodo = () => {
          let newTodo={
            text: todoText,
            id:Math.random(),
            isDone:false,
          };
          if (todoText=== "") return alert("please enter a valid text");
          setTodotext("");
          
    };

  return (
    <div className='input'>
      <h1 className='title'>My Todos</h1>
    <input className='inputt' size="50" type="text" value={todoText} onChange={e =>{setTodotext(e.target.value)}}/>
    <button className='buton' onClick={addtodo}>Add</button>
    </div>
  )
}

export default Input