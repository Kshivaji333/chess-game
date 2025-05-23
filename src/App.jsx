import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Game from './pages/Game';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='Game' element={<Game/>}/>
    </Routes>
  )
}

export default App
