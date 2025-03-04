import { Route, Routes } from 'react-router-dom'
import './App.css'
import LobbyScreen from './screens/LobbyScreen.jsx'
import Room from './screens/Room.jsx'

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<LobbyScreen />} />
      <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
