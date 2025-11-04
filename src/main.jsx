import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'services', element: <Services /> },
        { path: 'contact', element: <Contact /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'signin', element: <SignIn /> },
      ],
    },
  ],
  { basename: '/Trippy' }
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
