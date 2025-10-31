import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import { useState } from "react"
import Modal from "../Modal/Modal"
import EditTodoForm from "./EditTodoForm"
import {
  selectFilteredTodos,
  selectFilteredTodosMemo,
  selectUncompletedTodos,
} from "../../redux/todos/selectors"
import clsx from "clsx"

export const List = ({visibility}) => {
  const todos = useSelector(selectFilteredTodosMemo)

  const [isOpen, setIsOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const openElement = (todo) => {
    setEditedTodo(todo)
    setIsOpen(true)
  }
  const uncompletedTodos = useSelector(selectUncompletedTodos)
  return (
    <div>
      <p className="text-gray-700">Uncompleted: {uncompletedTodos}</p>
      <ul className={clsx('grid gap-2 p-3', visibility)}>
        {todos?.map((todo) => (
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
