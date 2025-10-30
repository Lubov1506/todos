import { TodoItem } from "./TodoItem"
import { useState } from "react"
import Modal from "../Modal/Modal"
import EditTodoForm from "./EditTodoForm"
import { useFetchTodosQuery } from "../../redux/todoApi"
import Loader from "./Loader"
import { getFilteredTodos } from "../../helpers/getFilteredTodos"
import { useSelector } from "react-redux"
import { selectTodosFilter } from "../../redux/todosFilter/slice"

export const List = () => {
  const [limit, setLimit] = useState(3)
  const { data, isLoading } = useFetchTodosQuery()
  // const { data, isLoading } = useFetchTodosQuery({ limit })
const filter = useSelector(selectTodosFilter)
  const [isOpen, setIsOpen] = useState(false)
  const [editedTodo, setEditedTodo] = useState(null)
  const openElement = (todo) => {
    setEditedTodo(todo)
    setIsOpen(true)
  }
  const filteredData = getFilteredTodos(data, filter)
  return (
    <div className=''>
      {isLoading && <Loader />}
      {/* <div className='flex justify-center gap-2 items-center'>
        <select
          value={limit}
          className='select'
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
        </select>
      </div> */}
      <ul className='grid grid-cols-2 gap-2 p-3'>
        {filteredData?.map((todo) => (
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
