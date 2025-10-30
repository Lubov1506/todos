import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/TodosApp/Layout"
import PublicRoute from "./routes/PublicRoute"
import Todos from "./pages/Todos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

const TodosApp = lazy(() => import("./components/TodosApp/TodosApp"))
function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='todos' element={<Todos />} />
        </Route>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
  )
}

export default App
