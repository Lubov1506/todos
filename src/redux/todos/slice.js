import { createSlice, isAnyOf, nanoid } from "@reduxjs/toolkit"
import {
  addTodoThunk,
  deleteTodoThunk,
  editTodoThunk,
  fetchTodosThunk,
  likeTodoThunk,
  toggleTodoThunk,
} from "./operations"

const initialState = {
  todos: [],
  isError: false,
  isLoading: false,
}
export const slice = createSlice({
  name: "todos",
  initialState,
  selectors: {
    selectTodos: (state) => state.todos,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.isError,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
        state.todos = payload
      })
      .addCase(addTodoThunk.fulfilled, (state, { payload }) => {
        state.todos.push(payload)
      })
      .addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter((item) => item.id !== payload)
      })
      .addCase(editTodoThunk.fulfilled, (state, { payload }) => {
        state.todos.map((item) => (item.id === payload.id ? payload : item))
      })
      .addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
        const item = state.todos.find((item) => item.id === payload.id)
        item.completed = !item.completed
      })
      .addCase(likeTodoThunk.fulfilled, (state, { payload }) => {
        const item = state.todos.find((item) => item.id === payload.id)
        item.liked = !item.liked
      })
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.pending,
          deleteTodoThunk.pending,
          editTodoThunk.pending,
          toggleTodoThunk.pending,
          likeTodoThunk.pending,
          addTodoThunk.pending
        ),
        (state) => {
          state.isLoading = true
          state.isError = false
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.fulfilled,
          deleteTodoThunk.fulfilled,
          editTodoThunk.fulfilled,
          toggleTodoThunk.fulfilled,
          likeTodoThunk.fulfilled,
          addTodoThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false
          state.isError = false
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodosThunk.rejected,
          deleteTodoThunk.rejected,
          editTodoThunk.rejected,
          toggleTodoThunk.rejected,
          likeTodoThunk.rejected,
          addTodoThunk.rejected
        ),
        (state) => {
          state.isLoading = false
          state.isError = true
        }
      )
  },
})
export const todoReducer = slice.reducer
export const {
  addTodo,
  deleteTodo,
  toggleLiked,
  toggleTodo,
  editTodo,
  fetchTodosSuccess,
  isError,
  isLoading,
} = slice.actions
export const { selectTodos, selectIsError, selectIsLoading } = slice.selectors
