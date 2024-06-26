import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(result => setItem(result))
            .catch(error => console.error("Error fetching data:", error))
    }, [id])

    return (
        <div className="itemDetailContainer">
            {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
        </div>
    )
}

export default ItemDetailContainer