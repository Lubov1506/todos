import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "modern-normalize"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import { store } from "./redux/store.js"
import { UserProvider } from "./store/UserProvider.jsx"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  </Provider>
)
