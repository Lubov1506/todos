import { useUser } from "../../store/hooks"

export const Header = ({ children }) => {
  const {
    user: { name },
    logout,
  } = useUser()
  return (
    <div className='flex sticky top-0 w-full justify-between p-2 items-center text-2xl text-white bg-gray-700'>
      <h2>TODO APP</h2>
      {children}
      <div className='flex gap-2 items-center'>
        <p>{name || "name"}</p>
        <button className='btn ' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
