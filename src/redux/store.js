import { todoReducer } from "./todos/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"
import { authReducer } from "./auth/slice"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    todosFilter: todosFilterReducer,
    auth: authReducer,
  },
})
