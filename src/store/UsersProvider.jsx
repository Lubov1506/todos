import { createContext, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getFilteredUsers } from "../helpers"

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("query") ?? ""
  const contextValue = {
    users: getFilteredUsers(users, query),
    setUsers,
    searchParams,
    setSearchParams,
    query,
  }
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  )
}
