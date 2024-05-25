import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { useParams, Link } from "react-router-dom"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        
        if (!id) {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(results => setProductos(results.products))
            
            return
        }
        fetch(`https://dummyjson.com/products/category/${id}`)
            .then(res => res.json())
            .then(results => setProductos(results.products))

    }, [id])

    return (
            <div className="tarjeta">
                {productos.map(producto => (
                    <div className="tarjetaContenido" key={producto.id}>
                        <img src={producto.images[0]} alt={producto.name} />
                        <h1>{producto.title}</h1>
                        <h2>${producto.price}</h2>
                        <h3>Stock: {producto.stock}</h3>
                        <Link to={`/item/${producto.id}`}><button>Comprar</button></Link>
                    </div>
                ))}
            </div>
    )
}

export default ItemListContainer