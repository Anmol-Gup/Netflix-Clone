import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </>
  )
}

export default App
