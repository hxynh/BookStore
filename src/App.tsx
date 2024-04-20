import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
//import { useAppSelector } from './app/store'

function App() {
  //const name = useAppSelector(state => state.user.users)
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />

    },
    {
      path: '/register',
      element: <Register />

    },
    {
      path: "",
      element: <Home />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
