import "../css/registration.css"
import { Link } from "react-router-dom";

export default function Lostpassword(){
    return(
        <div className="enter">
            <div className="login-container">

                    
                    <div className="login-form">
                        <Link className="back" to="/">Назад</Link>
                        <h2 className="login-title">Восстановление пароля</h2>


                        <input type="text" placeholder="Почта" className="login-input" />




                        <button className="login-button">Далее</button>
                    </div>

                   
                    <div className="login-info2">


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