import { Routes, Route } from "react-router-dom";
import './App.css'
import Enter from "./pages/Enter";
import Registration from "./pages/Registration";
import Lostpassword from "./pages/Lostpassword";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Enter/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/lostpassword" element={<Lostpassword/>} />
      </Routes>
    </>
  )
}

export default App
