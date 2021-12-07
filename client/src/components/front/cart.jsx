import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./cart.css";
export const Cart = ({props, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart}) => {
    const [carts, setCarts] = useState([]);
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    
    return (
        <div>
            <h3 className="display-5 text-center p-1">Cart Items</h3>
            
            {cartItems.length === 0 && (<div className="m-2 text-center">No item is added</div>)}
            <div>
                <table className="table m-4">
                <tbody>
                {cartItems.map((product) => (
                    <tr key={product.bid}>
                        <td >
                            <img key={product.bid} src={product.image} alt={product.title} width='150px' />
                        </td>
                        <td>
                                <h4>{product.title}</h4>
                        </td>
                        <td >
                                <h4>${product.price}</h4>
                        </td>

                        <td >
                            <button className="btn btn-warning btn-lg p-2 m-1" onClick={() => handleAddProduct(product)}>＋</button><br></br>
                            <button className="btn btn-warning btn-lg p-2 m-1 " onClick={() => handleRemoveProduct(product)}>ー</button>
                        </td>
                        <td className="p-2">
                            {product.quantity} x ${product.price}
                        </td>                  
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
            <div className="m-2 text-center"><h5>Total: ${totalPrice}</h5>
            </div>
            <div className="container my-3 bg-light">
                <div className="col-md-12 text-center">
                    {cartItems.length >= 1 && (<button className="btn btn-danger m-2 " onClick={handleClearCart}>Clear Cart</button>)}
                   
                        <Link to="/"><button type="button" className="btn btn-primary m-2">Home</button></Link>
                    
                </div>
                
            </div>

        </div>
      
    );
};