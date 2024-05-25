import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function CartWidget() {
    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} className="iconoCarrito"/>
            <i className="burbuja">5</i>
        </div>
    )
}

export default CartWidget