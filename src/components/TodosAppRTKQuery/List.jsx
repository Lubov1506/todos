import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import { useState } from "react"
import Modal from "../Modal/Modal"
import EditTodoForm from "./EditTodoForm"
import {
  selectUncompletedTodos,
} from "../../redux/todos/selectors"
import { useFetchTodosQuery } from "../../redux/todoApi"
import Loader from "./Loader"

export const List = () => {
  const { data , isLoading} = useFetchTodosQuery()
  const [isOpen, setIsOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const openElement = (todo) => {
    setEditedTodo(todo)
    setIsOpen(true)
  }
  const uncompletedTodos = useSelector(selectUncompletedTodos)
  return (
    <div className="">
      {isLoading && <Loader/>}
      <p className='text-gray-700'>Uncompleted: {uncompletedTodos}</p>
      <ul className='grid grid-cols-2 gap-2 p-3'>
        {data?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} openElement={openElement} />
        ))}
      </ul>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <EditTodoForm todo={editedTodo} onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  )
}
