import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, registerThunk } from "./operations"
import { isAnyOf } from "@reduxjs/toolkit"

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  error: false,
}
const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return initialState
      })
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending),
        (state) => {
          state.isLoading = true
          state.error = false
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state) => {
          state.error = false
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.rejected, loginThunk.rejected),
        (state) => {
          state.error = true
          state.isLoading = false
        }
      )
  },
})
export const authReducer = slice.reducer
export const { selectUser, selectToken, selectIsLoggedIn } = slice.selectors
