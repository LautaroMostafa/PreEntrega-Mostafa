import { Link } from "react-router-dom"

function ItemList({productos}) {
    return (
        <div className="tarjeta">
            {productos.map(producto => (
                <Link to={`/item/${producto.id}`} key={producto.id} className="tarjetaLink">
                    <div className="tarjetaContenido" >
                        <img src={producto.images[0]} alt={producto.name} />
                        <h1>{producto.title}</h1>
                        <h2>${producto.price}</h2>
                        <h3>Stock: {producto.stock}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ItemList