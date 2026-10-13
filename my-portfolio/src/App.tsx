import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Child route components will render inside this Outlet */}
        <Outlet />
        <Home />
      </main>
      <Footer />
    </>
  )
}

