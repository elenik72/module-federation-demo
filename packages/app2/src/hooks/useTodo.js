import React, { useState } from 'react';

export function useTodo (defaultValue) {
  const [todoList, setTodoList] = useState(defaultValue)

  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  return {
    todoList,
    addTodo,
  }
}
