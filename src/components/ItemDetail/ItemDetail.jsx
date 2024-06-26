import { useState, useContext, useEffect } from "react"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/cart/CartContext"

function ItemDetail({ item }) {
    const [count, setCount] = useState(1)
    const { addItem, products } = useContext(CartContext)
    const [stock, setStock] = useState(item.stock)

    useEffect(() => {
        const product = products.find(p => p.id === item.id)
        if (product) {
            setStock(product.stock)
        }
    }, [products, item.id])

    function addItemCart() {
        if (count <= stock) {
            addItem({ ...item, quantity: count })
            setCount(1)
        }
    }

    return (
        <div className="itemDetail">
            <div className="contenedorItem">
                <img src={item.images[0]} alt={item.title} />
                <div className="info">
                    <h1>{item.title}</h1>
                    <h2>${item.price}</h2>
                    <h3>Stock: {stock}</h3>
                </div>
                <ItemCount count={count} handleCount={setCount} stock={stock} />
                <button className="buttonAddCart" onClick={addItemCart} disabled={count > stock}>
                    Añadir al Carrito
                </button>
            </div>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemDetail