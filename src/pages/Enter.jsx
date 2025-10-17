import "../css/enter.css"

export default function Enter(){
    return(
        <div className="enter">
            <div className="login-container">
                   
                    <div className="login-form">
                        <h1 className="login-title">Вход</h1>

                        <input type="text" placeholder="Логин" className="login-input" />
                        <input type="password" placeholder="Пароль" className="login-input" />

                        <div className="login-links">
                            <button className="login-link">Регистрация</button>
                            <button className="login-link">Забыли пароль?</button>
                        </div>

                        <button className="login-button">Далее</button>
                    </div>

                   
                    <div className="login-info">
                        <div className="login-card">
                            <h2>
                            Домашняя бухгалтерия <br /> “Ally”
                            </h2>
                        </div>

                        <div className="login-image">
                            <img src="Rat.jpg" alt="Ally" />
                        </div>
                    </div>
                </div>

        </div>
    )
}