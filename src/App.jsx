import { TodosApp } from "./components/TodosApp/TodosApp"
import { TodosAppRTKQuery } from "./components/TodosAppRTKQuery/TodosAppRTKQuery"

function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  items-center bg-gray-200'>
      <TodosAppRTKQuery/>
      {/* <TodosApp/> */}
    </div>
  )
}

export default App
