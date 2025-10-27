import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Закрытие при клике вне меню
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <div className="menu-main" onClick={() => setIsOpen((prev) => !prev)}>
        Меню
      </div>

      <div className={`menu-popup ${isOpen ? "show" : ""}`}>
        <NavLink to="/home" className="menu-link" onClick={() => setIsOpen(false)}>
          Домашняя страница
        </NavLink>
        <NavLink to="/accounts" className="menu-link" onClick={() => setIsOpen(false)}>
          Счета
        </NavLink>
        <NavLink to="/incomeexpenses" className="menu-link" onClick={() => setIsOpen(false)}>
          Доходы/Расходы
        </NavLink>
        <NavLink to="/debts" className="menu-link" onClick={() => setIsOpen(false)}>
          Долги
        </NavLink>
      </div>
    </div>
  );
}
