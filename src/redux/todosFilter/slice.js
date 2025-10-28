import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filter: "all",
}

const slice = createSlice({
  name: "todosFilter",
  initialState,
  selectors: {
    selectTodosFilter: (state) => state.filter,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload
    },
  },
})

export const todosFilterReducer = slice.reducer
export const {selectTodosFilter} = slice.selectors
export const { changeFilter } = slice.actions
