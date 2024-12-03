import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Notfound from './components/Notfound/Notfound'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='*' element={<Notfound/>}/>
    
    </Routes>
    </>
  )
}

export default App
