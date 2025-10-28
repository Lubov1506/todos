import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = "https://664396276c6a65658707ade7.mockapi.io/"
export const fetchTodosThunk = createAsyncThunk(
  "todos/FetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("todos")
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const deleteTodoThunk = createAsyncThunk(
  "todos/DeleteTodo",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`todos/${id}`)
      return data.id
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)

export const toggleTodoThunk = createAsyncThunk(
  "todos/Toggle",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.put(`todos/${body.id}`, {
        ...body,
        completed: !body.completed,
      })
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const likeTodoThunk = createAsyncThunk(
  "todos/Like",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.put(`todos/${body.id}`, {
        ...body,
        liked: !body.liked,
      })
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const addTodoThunk = createAsyncThunk(
  "todos/Add",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post("todos", body)
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const editTodoThunk = createAsyncThunk(
  "todos/Edit",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.put(`todos/${body.id}`, body)
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
