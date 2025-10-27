
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Table from "../components/Table/Table";
import "../css/home.css";

export default function Debts() {
  

  const columns = ["Название", "Срок", "Сумма руб.","Выплачено", "Дата оформления","Счет"];

  const data = [
    {
      "Название": "Кредит на машину",
      "Срок": "3 года",
      "Сумма руб.": "2.000.000",
      "Выплачено":"1.000.000",
      "Дата оформления": "12.11.2024",
      "Счет":"Сбербанк",
    },

  ];

  return (
    <>
      <Header namepage="Долги" />
      <Menu />
      <Table columns={columns} data={data}></Table>
   
    </>
  );
}
