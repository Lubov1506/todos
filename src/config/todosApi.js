import axios from "axios"

export const todosApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
})

export const setToken = (token) => {
  todosApi.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
  todosApi.defaults.headers.common.Authorization = ``
}
