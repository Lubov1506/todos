import { useSelector } from "react-redux"
// import { selectIsLoggedIn } from "../redux/tracker/authSlice"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
  const isLoggedIn = false
//   const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn ? <Navigate to='/' replace /> : children
}
export default PublicRoute
