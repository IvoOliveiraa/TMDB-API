import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <div className='App'>

      <Navbar />
      
      <h2>My Lib</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default App
