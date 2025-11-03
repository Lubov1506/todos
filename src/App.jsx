import { lazy, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/TodosApp/Layout"
import PublicRoute from "./routes/PublicRoute"
import Todos from "./pages/Todos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import { PrivateRoute } from "./routes/PrivateRoute"
import { useDispatch } from "react-redux"
import { refreshThunk } from "./redux/auth/operations"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('refresh');
    
    dispatch(refreshThunk())
  }, [dispatch])
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
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
