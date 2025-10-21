import './Header.css'
import { Link } from "react-router-dom";

export default function Header({namepage}){
    return(
        <header>
            <div className="header-container">
                <Link to="/home">Ally</Link>
            
                <p>{namepage}</p>
                <Link className="profile" to="/profile"></Link>
            </div>
        </header>
    )
}