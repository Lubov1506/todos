import axios from "axios";

export const todosApi = axios.create({
    baseURL: 'https://goit-task-manager.herokuapp.com/'
})