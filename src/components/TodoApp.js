import React, {useEffect, useState} from 'react'

const TodoApp = ({ todos, addTodo, fetchTodos }) => {
  const [text,setText] = useState("")
  // useEffect(() => {
  //   fetchTodos()
  // },[])
  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
            addTodo(text)
            setText("")
            }}>Add</button>
        <ul>
            {todos.map((todo) => (
                <li>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp