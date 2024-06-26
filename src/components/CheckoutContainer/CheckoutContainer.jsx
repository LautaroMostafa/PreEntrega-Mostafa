import React, { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'


const CheckoutContainer = () => {

    const navigate = useNavigate()
    const { cart, totalPriceCart, clearCart } = useContext(CartContext)

    const completeOrder = async (buyer) => {

        const order = {
            buyer,
            items: cart,
            total: totalPriceCart
        }
        
        
        clearCart()
        navigate("/")
    }

    return (
        <Checkout completeOrder={completeOrder} />
    )
}

export default CheckoutContainer