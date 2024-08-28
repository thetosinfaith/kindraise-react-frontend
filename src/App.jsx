import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Login from './auth/Login/Login'
import Sighup from './auth/Signup/Signup'
import User from './Layout/User'
import DashBoard from './Pages/DashBoard'
import AdminRoute from './Admin/AdminRoute'
import AdminDashboard from './Admin/AdminDashboard'
import ForgetPassword from './auth/ForgetPassword/ForgetPassword'
import Campaign from './Pages/Campaign'

const router = createHashRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/forgotpassword',
    element: <ForgetPassword/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Sighup/>
  },
  {
    path: "/",
    element: <User/>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard/>
      },
      {
        path: '/dashboard/customize',
        element: <Campaign/>
      }
    ]
  },
  {
    path: "*",
    element: <div>Page not found!</div>
  },
  {
    path: '/admin',
    element: <AdminRoute/>,
    children: [
      {
        path: "/admin/admindashboard",
        element: <AdminDashboard/>
      }
    ]
  },
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
