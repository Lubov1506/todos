import { createAsyncThunk } from "@reduxjs/toolkit"
import { todosApi } from "../../config/todosApi"

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = todosApi.post("users/sign", credentials)
      return data
    } catch (err) {
      console.log(err)
      return thunkApi.rejectWithValue(err.message)
    }
  }
)
