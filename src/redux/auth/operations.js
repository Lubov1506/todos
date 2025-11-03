import { createAsyncThunk } from "@reduxjs/toolkit"
import { clearToken, setToken, todosApi } from "../../config/todosApi"

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await todosApi.post("users/signup", credentials)
      setToken(data.token)
      return data
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await todosApi.post("users/login", credentials)
      setToken(data.token)
      return data
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (credentials, thunkApi) => {
    try {
      const { data } = await todosApi.post("users/logout")
      clearToken()
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (credentials, thunkApi) => {
    const token = thunkApi.getState().auth.token
    if(!token){
      return thunkApi.rejectWithValue('no token')
    }
    setToken(token)
    try {
      const { data } = await todosApi.get("users/current")
      return data
    } catch (err) {
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
