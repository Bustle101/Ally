import { Routes, Route } from "react-router-dom";
import './App.css'
import Enter from "./pages/Enter";
import Registration from "./pages/Registration";
import Lostpassword from "./pages/Lostpassword";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile";
import Accounts from "./pages/Accounts.jsx"
import IncomeExpenses from "./pages/IncomeExpenses.jsx";
import Debts from "./pages/Debts.jsx";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Enter/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/lostpassword" element={<Lostpassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/incomeexpenses" element={<IncomeExpenses/>} />
        <Route path="/debts" element={<Debts/>} />
      </Routes>
    </>
  )
}

export default App
