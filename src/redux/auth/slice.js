import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
}
const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
  },
})
export const authReducer = slice.reducer
export const { selectUser, selectToken } = slice.selectors
