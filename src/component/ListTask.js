import React from 'react'
import { useSelector } from "react-redux";//
function ListTask() {
  const todos = useSelector((state) => state.todoreducer.todos);
  return (
      <div>
        <h1>Todo List</h1>
  
        {todos.map((todo, i) => (
          <div>
            <h2 key={todo.id}> {todo.text} </h2>
            <button>DELETE</button>
            <button>DONE</button>
          </div>
        ))}
      </div>
    );
  
}

export default ListTask