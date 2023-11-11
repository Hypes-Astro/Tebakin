import { useEffect, useState } from "react";
import Home from "./view/home" //entah kenapa kalo make Home malah ga bisa. padahal-kan harusnya sama Home case nya
import TebakinPage from "./view/TebakinPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBall from "./component/LoadingBall";
import "./index.css"

function App() {

  const  [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    
    const timeOut = setTimeout(()=>{
      setLoading(false)
    },1000);

    return () => clearTimeout(timeOut);

  },[])


  return (
    <Router>
      {loading && <LoadingBall/>}

      {/* tampilkan ketika loading telah selesai */}

      <div className={`transition-opacity ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* tampilkan ketika loading telah selesai */}
        {
          !loading && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<TebakinPage />} />
            </Routes>
          )
        }
      </div>
        
    </Router>
  )
}

export default App
