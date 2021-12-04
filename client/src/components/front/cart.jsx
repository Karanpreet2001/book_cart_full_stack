import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./cart.css";
export const Cart = ({props, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart}) => {
    const [carts, setCarts] = useState([]);
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    
    return (
        <div>
            <h2>Cart Items</h2>
            <div>{cartItems.length >= 1 && (<button onClick={handleClearCart}>Clear Cart</button>)}</div>
            {cartItems.length === 0 && (<div>No item is added</div>)}
            <div>
                {cartItems.map((product) => (
                    <div key={product.bid}>
                        <img key={product.bid} src={product.image} alt={product.title} width='150px' />
                        <div>
                            <h4>{product.title}</h4>
                        </div>
                        <div>
                            <h4>{product.price}</h4>
                        </div>
                        <div>
                            <button onClick={() => handleAddProduct(product)}>+</button>
                            <button onClick={() => handleRemoveProduct(product)}>-</button>
                        </div>
                        <div>
                            {product.quantity} * ${product.price}
                        </div>

                    </div>
                ))}
            </div>
            <div>Total: 
                <div>${totalPrice}</div>
            </div>


            <button type="button"></button>
        </div>
      
    );
};