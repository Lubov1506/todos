import { useDispatch, useSelector } from "react-redux"
import { useUser } from "../../store/hooks"
import { AddTodo } from "./AddTodo"
import { AuthForm } from "./AuthForm"
import { Filter } from "./Filter"
import { Header } from "./Header"
import { List } from "./List"
import { useEffect } from "react"
import { fetchTodosThunk } from "../../redux/todos/operations"
import Loader from "./Loader"
import { selectIsLoading } from "../../redux/todos/slice"

export const TodosApp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [dispatch])
  const isLoading = useSelector(selectIsLoading)
  const { isLoggedIn } = useUser()
  if (!isLoggedIn) {
    return (
      <div className='w-full h-screen grid place-content-center'>
        <AuthForm />
      </div>
    )
  }
  return (
    <div className=' bg-gray-200 min-h-screen min-w-full relative'>
      {isLoading && <Loader />}
      <Header />
      <AddTodo />
      <Filter />
      <List />
    </div>
  )
}
