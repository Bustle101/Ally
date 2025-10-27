import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";

export default function Profile(){
    return(
        <>
            <div>
                <Header namepage="Профиль"/>
                <Menu></Menu>
            </div>
            <div>
                <h2>
                    Логин
                </h2>
                <img src="profile.jpg" ></img>
                <button>Сброс пароля</button>
            </div>
        </>
    )
}