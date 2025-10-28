import { todoReducer } from "./todos/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"


export const store = configureStore({
  reducer: {
    todos:  todoReducer,
    todosFilter: todosFilterReducer,
  },

  devTools: import.meta.env.MODE !== "production",
})
