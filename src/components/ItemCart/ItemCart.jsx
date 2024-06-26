import { useContext } from "react"
import "./ItemCart.css"
import CartContext from "../../context/cart/CartContext"

function ItemCart({item}) {
    const {calculateTotalPriceProduct,deleteItemCart} = useContext(CartContext)
    const totalPriceProduct = calculateTotalPriceProduct(item.id)

    return (
        <div className="objetoCarrito">
            <img className="imgCarrito" src={item.images[0]} alt={item.title} />
            <div className="textoObjetoCarrito">
                <h2>{item.title}</h2>
                <h3>Precio Unitario: ${item.price}</h3>
                <span>{item.quantity}</span>
            </div>
            <div className="totalObjetoCarrito">
                <h4>Cantidad Total</h4>
                <h5>{totalPriceProduct}</h5>
            </div>
            <button className="deleteButton" onClick={()=>deleteItemCart(item.id)}>X</button>
        </div>
    )
}

export default ItemCart