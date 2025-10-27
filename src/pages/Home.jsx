import { Link } from "react-router-dom";
import Header from "../components/Header/Header"

import "../css/home.css"
import Menu from "../components/Menu/Menu";


export default function Home(){
    return(
        <div className="home-container">
            <Header namepage="Домашняя страница"/>
            <Menu></Menu>
            <p>
                Отчеты
            </p>
        </div>

    )
}