import React, { useState } from 'react';

function ItemCount({ stock, initial }) {
    const [count, setCount,] = useState(initial);

    return (
        <div>
            <p>Producto: {count} </p>
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>

        </div>
    );
}

export default ItemCount;
