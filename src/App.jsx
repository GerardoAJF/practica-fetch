import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from "./pages/Home"
import Nav from "./components/Nav"
import DragonBall from "./pages/DragonBall"

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dragon" element={<DragonBall/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
