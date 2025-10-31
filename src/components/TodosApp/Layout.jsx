import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { Header } from "./Header"

const Layout = () => {
  return (
    <div className='flex flex-col gap-2 h-screen w-full items-center '>
      <div className='w-full'>
        <Header>
          <NavBar />
        </Header>
      </div>
      <div className=' w-full overflow-y-scroll'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
