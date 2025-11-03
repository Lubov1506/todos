import { todoReducer } from "./todos/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"
import { authReducer } from "./auth/slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const todosConfig = {
  key: "todos",
  version: 1,
  storage,
}

const filterConfig = {
  key: "filter",
  version: 1,
  storage,
}

const authConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
}

export const store = configureStore({
  reducer: {
    todos: persistReducer(todosConfig, todoReducer),
    todosFilter: persistReducer(filterConfig, todosFilterReducer),
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
