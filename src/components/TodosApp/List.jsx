import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

import { useState } from "react"
import Modal from "../Modal/Modal"
import EditTodoForm from "./EditTodoForm"
import { selectTodos } from "../../redux/todos/slice"
import { selectTodosFilter } from "../../redux/todosFilter/slice"
import { getFilteredTodos } from "../../helpers/getFilteredTodos"

export const List = () => {
  const todos = useSelector(selectTodos)
  const filter = useSelector(selectTodosFilter)

  const filteredTodos = getFilteredTodos(todos, filter)

  //Modal
  const [isOpen, setIsOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const openElement = (todo) => {
    setEditedTodo(todo)
    setIsOpen(true)
  }
  // console.log(filteredTodos);
  
  return (
    <div>
      <ul className='grid grid-cols-2 gap-2 p-3'>
        {filteredTodos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} openElement={openElement} />
        ))}
      </ul>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <EditTodoForm todo={editedTodo} onClose={() => setIsOpen(false)}/>
        </Modal>
      )}
    </div>
  )
}
