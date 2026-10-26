import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import Project from './pages/project.tsx'
import Home from './pages/home.tsx'

const router = createBrowserRouter([{
  path:"/",
  element: <App />,
  children: [
    { path: "/", element:<Home />},
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "project", element: <Project /> },
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
