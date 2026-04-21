import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import { useState } from "react"
import Modal from "../Modal/Modal"
import EditTodoForm from "./EditTodoForm"
import { selectFilteredTodosMemo } from "../../redux/todos/selectors"
import clsx from "clsx"

export const List = ({ visibility }) => {
  const todos = useSelector(selectFilteredTodosMemo)

  const [isOpen, setIsOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const openElement = (todo) => {
    setEditedTodo(todo)
    setIsOpen(true)
  }
  return (
    <div>
      <ul className={clsx("grid gap-2 p-3", visibility)}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} openElement={openElement} />
          ))
        ) : (
          <p className='text-center text-lg text-gray-500'>No todos found</p>
        )}
      </ul>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <EditTodoForm todo={editedTodo} onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  )
}
