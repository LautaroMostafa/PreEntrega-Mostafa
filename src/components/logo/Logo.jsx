import "./Logo.css"
import logo from "../../assets/logo.jpeg"
import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link className="logoImg" to="/">
            <img src={logo} alt="Logo de la aplicación" />
        </Link>
    )
}

export default Logo