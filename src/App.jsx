import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element = {<Authentication/>}/>
    <Route path='/register' element = {<Authentication insideRegister/>}/>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/projects' element = {<Projects/>}/>
    <Route path='/*' element = {<Navigate to={'/'}/>}/>

   </Routes>
   <Footer/>
    </>
  )
}

export default App
