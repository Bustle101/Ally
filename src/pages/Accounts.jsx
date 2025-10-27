import { Link } from "react-router-dom";
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import Table from "../components/Table/Table";
export default function Accounts(){

    const columns = ["Категория", "Название счета", "№", "Сумма руб.", "Действительно до конца"];

    const data = [
        {
        "Категория": "Дебетовая карта",
        "Название счета": "Сбербанк",
        "№": "21729384603",
        "Сумма руб.": "10000",
        "Действительно до конца": "12/26",
        },
        {
        "Категория": "Наличные",
        "Название счета": "Заначка",
        "№": "",
        "Сумма руб.": "100",
        "Действительно до конца": "-",
        },
    ];

    return(
        <>
            <Header namepage="Счета"/>
            <Menu></Menu>
            <Table columns={columns} data={data}></Table>
           
        </>
    )
}