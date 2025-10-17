import { Routes, Route } from "react-router-dom";
import './App.css'
import Enter from "./pages/Enter";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Enter/>} />
      </Routes>
    </>
  )
}

export default App
