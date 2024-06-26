import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import Categorias from "../Categorias/Categorias.jsx"

function NavBar() {

    return (
        <div className="navBar">    
            <div className="categoriasNav">
                <Categorias />
            </div>
            <div>
                <Logo />
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
        
    )
}

export default NavBar