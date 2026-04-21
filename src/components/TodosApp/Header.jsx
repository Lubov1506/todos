import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/slice"
import { logoutThunk } from "../../redux/auth/operations"
import { Link } from "react-router-dom"

export const Header = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const handleLogout = () => {
    dispatch(logoutThunk())
  }
  return (
    <div className='flex sticky top-0 w-full justify-between p-2 items-center text-2xl text-white bg-gray-700'>
      <Link to='/'>
        <h2>TODO APP</h2>
      </Link>
      {children}
      <div className='flex gap-2 items-center'>
        <p>{user.name || "name"}</p>
        <button className='btn ' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
