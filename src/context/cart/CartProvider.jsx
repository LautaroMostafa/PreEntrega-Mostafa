import { useEffect, useState } from "react"
import CartContext from "./CartContext"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [totalQuantityCart, setTotalQuantityCart] = useState(0)
    const [totalPriceCart, setTotalPriceCart] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setTotalQuantityCart(cart.reduce((acc, item) => acc + item.quantity, 0))
        setTotalPriceCart(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
    }, [cart])

    const addItem = (product) => {
        const itemExist = cart.find(item => item.id === product.id)
        if (itemExist) {
            setCart(cart.map(item => {
                if (item.id === product.id) {
                    return {    
                        ...item,
                        quantity: item.quantity + product.quantity
                    }
                }
                return item
            }))
        } else {
            setCart(cart => ([...cart, { ...product, quantity: product.quantity }]))
        }
        
        setProducts(products.map(p => {
            if (p.id === product.id) {
                return {
                    ...p,
                    stock: p.stock - product.quantity
                }
            }
            return p
        }))
    }
    
    const calculateTotalPriceProduct = (productId) => {
        const product = cart.find(item => item.id === productId)
        if (product) {
            return product.price * product.quantity
        }
        return 0
    }

    const deleteItemCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantityCart, clearCart, totalPriceCart, calculateTotalPriceProduct, deleteItemCart, products }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider