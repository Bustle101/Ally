import { Routes, Route } from "react-router-dom";
import './App.css'
import Enter from "./pages/Enter";
import Registration from "./pages/Registration";
import Lostpassword from "./pages/Lostpassword";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Enter/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/lostpassword" element={<Lostpassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
