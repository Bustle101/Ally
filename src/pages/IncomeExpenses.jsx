import { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Table from "../components/Table/Table";
import "../css/home.css";

export default function IncomeExpenses() {
  const [activeTab, setActiveTab] = useState("income");

  const columns = ["Название", "Интервал", "Сумма руб.", "Счет", "№ Счета", "Дата"];

  const incomeData = [
    {
      "Название": "Зарплата",
      "Интервал": "Ежемесячный",
      "Сумма руб.": "100000",
      "Счет": "Сбербанк",
      "№ Счета": "12736843621",
      "Дата": "12.11.2005" ,
    },
    {
      "Название": "Фриланс",
      "Интервал": "Разовый",
      "Сумма руб.": "15000",
      "Счет": "Тинькофф",
      "№ Счета": "9876543210",
      "Дата": "12.11.2005" ,
    },
  ];

  const expenseData = [
    {
      "Название": "Коммунальные платежи",
      "Интервал": "Ежемесячный",
      "Сумма руб.": "8000",
      "Счет": "Сбербанк",
      "№ Счета": "12736843621",
      "Дата": "12.11.2005" ,
    },
    {
      "Название": "Еда",
      "Интервал": "Еженедельный",
      "Сумма руб.": "5000",
      "Счет": "Наличные",
      "№ Счета": "-",
      "Дата": "12.11.2005" ,
    },
  ];

  return (
    <>
      <Header namepage="Доходы / Расходы" />
      <Menu />

      <div className="switch-cont">
        <button
          className={`switch ${activeTab === "income" ? "active" : ""}`}
          onClick={() => setActiveTab("income")}
        >
          Доходы
        </button>
        <button
          className={`switch ${activeTab === "expenses" ? "active" : ""}`}
          onClick={() => setActiveTab("expenses")}
        >
          Расходы
        </button>
      </div>

      {activeTab === "income" ? (
        <Table columns={columns} data={incomeData} />
      ) : (
        <Table columns={columns} data={expenseData} />
      )}
    </>
  );
}
