import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import CartContext from "../../context/cart/CartContext"
import { useContext } from "react"

function CartWidget() {
    const { totalQuantityCart } = useContext(CartContext)
    const displayQuantity = isNaN(totalQuantityCart) ? 0 : totalQuantityCart

    return (
        <div className="carrito">
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} className="iconoCarrito" />
                <span className="burbuja">{displayQuantity}</span>
            </Link>
        </div>
    )
}

export default CartWidget