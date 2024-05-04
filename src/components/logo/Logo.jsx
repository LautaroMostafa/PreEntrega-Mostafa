import "./Logo.css"
import logo from "../../assets/logo.jpeg"

function Logo() {
    return (
    <div className="logoImg">
    <img src={logo} alt="Logo de la aplicación" />
    </div>
    )
}

export default Logo