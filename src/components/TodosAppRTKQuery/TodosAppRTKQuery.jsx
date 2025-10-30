import { useUser } from "../../store/hooks"
import { AddTodo } from "./AddTodo"
import { AuthForm } from "./AuthForm"
import { Filter } from "./Filter"
import { Header } from "./Header"
import { List } from "./List"
import Loader from "./Loader"
import { useFetchTodosQuery } from "../../redux/todoApi"

export const TodosAppRTKQuery = () => {
  const {isLoading} = useFetchTodosQuery()  

  const { isLoggedIn } = useUser()
  if (!isLoggedIn) {
    return (
      <div className='w-full h-screen grid place-content-center'>
        <AuthForm />
      </div>
    )
  }
  return (
    <div className='min-h-screen min-w-full relative flex flex-col gap-2'>
      {isLoading && <Loader />}
      <Header />
      <AddTodo />
      <Filter />
      <List />
    </div>
  )
}
