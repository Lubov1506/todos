import { selectTodos } from "./slice"
import { selectTodosFilter } from "../todosFilter/slice"
import { createSelector } from "@reduxjs/toolkit"

export const selectFilteredTodos = (state) => {
  const todos = selectTodos(state)
  const filter = selectTodosFilter(state)
  console.log("filter is done")

  switch (filter) {
    case "all": {
      return todos
    }
    case "active": {
      return todos.filter((todo) => !todo.completed)
    }
    case "completed": {
      return todos.filter((todo) => todo.completed)
    }
    case "liked": {
      return todos.filter((todo) => todo.liked)
    }
    default:
      return todos
  }
}
export const selectFilteredTodosMemo = createSelector(
  [selectTodos, selectTodosFilter],
  (todos, filter) => {
    switch (filter) {
      case "all": {
        return todos
      }
      case "active": {
        return todos.filter((todo) => !todo.completed)
      }
      case "completed": {
        return todos.filter((todo) => todo.completed)
      }
      case "liked": {
        return todos.filter((todo) => todo.liked)
      }
      default:
        return todos
    }
  }
)

export const selectUncompletedTodos = createSelector([selectTodos], (todos) => {

  return todos.reduce((total, item) => total + !item.completed, 0)
})
