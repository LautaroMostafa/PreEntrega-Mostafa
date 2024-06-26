import "./ItemCount.css";
import React from 'react';

function ItemCount({ count, handleCount, stock }) {
    const decrement = () => {
        if (count > 1) handleCount(count - 1);
    };

    const increment = () => {
        if (count < stock) handleCount(count + 1);
    };

    return (
        <div className="countContainer">
            <button onClick={increment} disabled={count >= stock}>+</button>
            <div className='countWrapper'>
                <span className='count'>{count}</span>
            </div>
            <button onClick={decrement} disabled={count <= 1}>-</button>
        </div>
    );
}

export default ItemCount;