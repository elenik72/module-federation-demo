import React from "react"

import { useTodo } from "./hooks/useTodo"
import { List } from "./List"

export default function Widget () {
  const [todo, setTodo] = React.useState("")
  const { addTodo, todoList } = useTodo([])

  const handleClick = (e) => {
    e.preventDefault()

    addTodo(todo)
    setTodo('')
  }

  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "#2196f3",
        color: "#fff",
      }}
    >
      <h2 style={{ color: "#fff" }}>
        Todo List
      </h2>
      <form>
        <input
          type="text"
          value={todo}
          style={{ padding: "5px", border: "none", margin: "10px", color: "#000" }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          style={{ color: "#000", borderRadius: "5px", border: "none", padding: "5px" }}
          onClick={handleClick}
        >
          OK
        </button>
      </form>

      <List list={todoList} />
    </div >
  );
}
