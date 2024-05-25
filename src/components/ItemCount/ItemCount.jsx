import "./ItemCount.css"
import React, { useState } from 'react'

function ItemCount({ initial, stock }) {
    
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="countContainer">
            <button onClick={increment}>+</button>
            <div className='countWrapper'>
                <span className='count'>{count}</span>
            </div>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default ItemCount