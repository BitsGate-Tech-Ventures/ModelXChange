import { BrowserRouter, Route, Routes } from "react-router-dom"


import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"


function App() {

  return (
    <> 
    <div className="w-full h-screen bg">

    <BrowserRouter>

    <Routes>

    <Route path="" element={<Home/>} />
    <Route path="/Register" element={<RegisterPage/>} />
    <Route path="/Login" element={<LoginPage/>} />

    </Routes>

    </BrowserRouter>

    </div>
   
    </>
 
  )
}

export default App
