import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
// import b101 from '../img';


const Products = ({ productsItems, handleAddProduct, handleChangeItem, location}) => {


    return ( 
        <div className="bg-light m-4">
            {console.log(productsItems)}
            {productsItems.map((product, key)=>(       
                <div className="m-4" key={product._id}>

                    <table className="table bg-light m-2">
                        <tbody className="">
                            <tr key={product.bid} >
                                <td className="col-1">
                                    <img key={product.bid} src={product.image} alt={product.title} width='150px' />
                                </td>
                                <td>
                                    <Link style={{ textDecoration: 'none' }} to={`/productdetails/${product.bid}`} state={{ product: product }}><h5>{product.title}</h5></Link>
                                    <p>
                                        {product.category}<br></br>
                                        by {product.author}<br></br>
                                        {product.publishYear}<br></br>
                                        <b>${product.price}</b><br></br></p>
                                    {/* <button onClick={(e) => addToCart(product._id, 1)} type="button" name="addToCart" id="addToCart" className="btnAdd m-2 p-2  btn-warning ">Add to Cart</button> */}
                                    <button onClick={() => handleAddProduct(product)} type="button" name="addToCart" id="addToCart" className="btn m-2 p-2  btn-warning ">Add to Cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>   


                
            ))}

        </div>
     );
}
 
export default Products;