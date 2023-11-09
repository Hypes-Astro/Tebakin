import Home from "./view/Home.jsx"
import TebakinPage from "./view/TebakinPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playground" element={<TebakinPage/>} />
          
        </Routes>
    </Router>
  )
}

export default App
