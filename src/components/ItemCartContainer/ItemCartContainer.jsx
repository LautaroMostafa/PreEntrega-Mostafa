import React, { useContext } from "react"
import CartContext from "../../context/cart/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import "./ItemCartContainer.css"
import { useNavigate } from "react-router-dom"

function ItemCartContainer() {
    const { cart, totalPriceCart } = useContext(CartContext)
    const navigate = useNavigate()

    let content

    if (cart.length === 0) {
        content = <h1 className="msgSinProductos">No tienes Productos en el Carrito 😁</h1>
    } else {
        content = (
            <div className="contenidoCarrito">
                <div>
                    {cart.map((item) => (
                        <ItemCart key={item.id} item={item} />
                    ))}
                </div>
                <div className="totalCarrito">
                    <h2>Total Del Carrito</h2>
                    <h3>{totalPriceCart}</h3>
                    <button onClick={() => navigate("/checkout")}>Finalizar Compra</button>
                </div>
            </div>
        )
    }
    return <div>{content}</div>
}

export default ItemCartContainer