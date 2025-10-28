import axios from "axios"
import {
  addTodo,
  deleteTodo,
  editTodo,
  fetchTodosSuccess,
  isError,
  isLoading,
  toggleLiked,
  toggleTodo,
} from "./slice"

axios.defaults.baseURL = "https://664396276c6a65658707ade7.mockapi.io/"

export const fetchTodosThunk = () => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    const { data } = await axios.get("todos")
    dispatch(fetchTodosSuccess(data))
  } catch (e) {
    console.log(e)
    dispatch(isError(true))
  } finally {
    dispatch(isLoading(false))
  }
}

export const deleteTodoThunk = (id) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(isError(false))
    await axios.delete(`todos/${id}`)
    dispatch(deleteTodo(id))
  } catch (e) {
    dispatch(isError(true))
    console.log(e)
  } finally {
    dispatch(isLoading(false))
  }
}
export const toggleTodoThunk = (body) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(isError(false))
    await axios.put(`todos/${body.id}`, { ...body, completed: !body.completed })
    dispatch(toggleTodo(body.id))
  } catch (e) {
    dispatch(isError(true))
    console.log(e)
  } finally {
    dispatch(isLoading(false))
  }
}
export const likeTodoThunk = (body) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(isError(false))
    await axios.put(`todos/${body.id}`, { ...body, liked: !body.liked })
    dispatch(toggleLiked(body.id))
  } catch (e) {
    dispatch(isError(true))
    console.log(e)
  } finally {
    dispatch(isLoading(false))
  }
}
export const addTodoThunk = (body) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(isError(false))
    const { data } = await axios.post("todos", body)
    dispatch(addTodo(data))
  } catch (e) {
    dispatch(isError(true))
    console.log(e)
  } finally {
    dispatch(isLoading(false))
  }
}
export const editTodoThunk = (body) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(isError(false))
    await axios.put(`todos/${body.id}`, body)
    dispatch(editTodo(body))
  } catch (e) {
    dispatch(isError(true))
    console.log(e)
  } finally {
    dispatch(isLoading(false))
  }
}
