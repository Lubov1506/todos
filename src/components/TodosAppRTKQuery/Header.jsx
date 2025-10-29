import { useUser } from "../../store/hooks"

export const Header = () => {
  const {
    user: { name },
    logout,
  } = useUser()
  return (
    <div className='flex justify-between px-2 py-1 items-center text-2xl text-white bg-gray-700'>
      <h2>TODO APP</h2>
      <p>{name|| 'name'}</p>
      <button className='btn ' onClick={logout}>
        Logout
      </button>
    </div>
  )
}
