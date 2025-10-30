import { Outlet } from "react-router-dom"
import NavBar from "../TodosAppRTKQuery/NavBar"
import { Header } from "../TodosAppRTKQuery/Header"

const Layout = () => {
  return (
    <div className='flex flex-col gap-2 min-h-screen w-full items-center '>
      <div className="w-full">
        <Header>
          <NavBar />
        </Header>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
