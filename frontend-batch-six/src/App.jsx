
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import { ProductCard } from './components/productCard'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import AdminPage from './pages/AdminPage'
import TestPage from './pages/testPage'
import RegisterPage from './pages/register'

function App() {
  

  return (
    <BrowserRouter>
    <div>
      
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/testing" element={<TestPage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/*' element={<h1>404 not found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
