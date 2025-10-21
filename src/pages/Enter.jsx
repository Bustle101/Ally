import "../css/enter.css"
import { Link } from "react-router-dom";

export default function Enter(){
    return(
        <div className="enter">
            <div className="login-container">
                   
                    <div className="login-form">
                        <h1 className="login-title">Вход</h1>

                        <input type="text" placeholder="Логин" className="login-input" />
                        <input type="password" placeholder="Пароль" className="login-input" />

                        <div className="login-links">
                            <Link className="login-link" to="/registration">Регистрация</Link>
                            <Link className="login-link" to="/lostpassword">Забыли пароль?</Link>
                        </div>

                        
                        <Link className="login-button" to="/home">Далее</Link>
                    </div>

                   
                    <div className="login-info">


                        <div className="login-image">
                            <img src="rat2.png" alt="Ally" />
                        </div>
                        <div className="login-card">
                            <h2>
                            Домашняя бухгалтерия <br /> “Ally”
                            </h2>
                        </div>
                    </div>
                </div>

        </div>
    )
}