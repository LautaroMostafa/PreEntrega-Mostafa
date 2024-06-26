import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

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
        <ItemList productos={productos}/>
    )
}

export default ItemListContainer