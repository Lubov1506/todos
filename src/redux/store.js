import { todoReducer } from "./todos/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"
import { todoApi } from "./todoApi"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    todosFilter: todosFilterReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  devTools: import.meta.env.MODE !== "production",
})
setupListeners(store.dispatch)