import { nanoid } from "nanoid"
import { createContext, useState } from "react"

export const TodosContext = createContext()
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "create some project", completed: false, liked: false },
  ])
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), todo, completed: false, liked: false },
    ])
  }
  const contextValue = { todos, deleteTodo, addTodo  }
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  )
}
