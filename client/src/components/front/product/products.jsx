import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
// import b101 from '../img';


const Products = ({ productsItems, handleAddProduct, handleChangeItem, location}) => {


    return ( 
        <div className="bg-secondary">
            {console.log(productsItems)}
            {productsItems.map((product, key)=>(       
                <div className="products d-inline-block m-2" key={product.bid}>
                
                    <table className ="table bg-light">
                        <tbody>
                            <tr>
                                <td >
                                    <img key={product.bid} src={product.image} alt={product.title} width='150px' />
                                </td>
                                <td >
                                    <Link to={`/productdetails/${product.bid}`}><h5>{product.title}</h5></Link>
                                    <p className="">{product.category}<br></br>
                                        by {product.author}<br></br>
                                        {product.publishYear}<br></br>
                                        ${product.price}<br></br></p>
                                    {/* <button onClick={(e) => addToCart(product._id, 1)} type="button" name="addToCart" id="addToCart" className="btnAdd m-2 p-2  btn-warning ">Add to Cart</button> */}
                                    <button onClick={() => handleAddProduct(product)} type="button" name="addToCart" id="addToCart" className="btnAdd m-2 p-2  btn-warning ">Add to Cart</button>
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