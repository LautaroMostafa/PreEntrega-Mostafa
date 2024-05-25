import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail() {

    const [item, setItem] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(result => setItem(result))
            .catch(error => console.error("Error fetching data:", error))
    }, [id])

    return (
        <div>
        {item && (
            <div className="itemDetail" key={item.id}>
                <div className="contenedorItem">
                <img src={item.images[0]} alt={item.title} />
                <div className="info">
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <h3>Stock: {item.stock}</h3>
                </div>
                <ItemCount initial={1} stock={item.stock}/>
                </div>
                <p>{item.description}</p>
            </div>
        )}
    </div>
    )
}

export default ItemDetail