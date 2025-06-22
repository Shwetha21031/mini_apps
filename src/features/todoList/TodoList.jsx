import React, { useState } from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import './todoList.scss'

const TodoList = () => {
  let [todos, setTodos] = useState([])
  let [val, setVal] = useState("")

  const handleAddTask = () => {
    if (val) {
      setTodos([...todos, { 'task': val, 'completed': false }])
      setVal('')
    } else {
      alert('please enter task to add')
    }
    
  }

  const handleChecked = (i) => {
    const newTodos = todos.map((todo, index) => {
      if (index === i) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    setTodos(newTodos);
  }
  

  const handleDelete = (i) => {
    const newTodos = todos.filter((todo, index) => index !== i);
    setTodos(newTodos);
  }
  

  console.log(todos)
  return (
    <div className="todo-container">
      <div className="todo-bg">
        <div className="todo-input">
          <input type="text" placeholder="Enter tasks here..." value={val} onChange={(e)=>setVal(e.target.value)} />
          <button className="add-task" onClick={handleAddTask}>Add task</button>
        </div>
        <div className="todo-container">
          {
            todos.length > 0 
              ? <div className="todos">
                <ul>
                {
                  todos.map((task, index) => {
                    return <li key={index} className={task.completed ? 'completed task-item' : 'task-item'}  >
                      <div className="task-title">{task?.task}</div>
                      <div className="actions">
                        <button className="completed" onClick={()=>handleChecked(index)}><IoCheckmarkDoneSharp /></button>
                        <button className="delete" onClick={()=>handleDelete(index)}><GoTrash /> </button>
                      </div>
                    </li>
                  })
                }
                </ul>
                
              </div>
              : <div className="task-not-found">Add tasks to display here...</div>
          }

        </div>
      </div>
    </div>
  )
}

export default TodoList