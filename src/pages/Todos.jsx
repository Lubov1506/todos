import { TodosApp } from "../components/TodosApp/TodosApp"

const Todos = () => {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  items-center bg-gray-200'>
      <TodosApp />
    </div>
  )
}

export default Todos
