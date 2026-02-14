import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profiles from './Profiles.jsx'
import NotFound from './NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>
  },
  {
    path: '/profiles',
    element: <Profiles/>,
    errorElement: <NotFound/>
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router = {router}/>
)
