import React from 'react';
import {Route,Routes} from "react-router-dom";
import Products from '../front/product/products';
import Admin from '../front/admin';
import { Cart } from '../front/cart';
import ProductDetails from '../front/product/productdetails';

const Routess = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart, onDeleteDB, onEditDB, newBook, onAddDB}) => {
    return (
        <div>
            {console.log(productItems)}
            <Routes>
                <Route path="/"  element={<Products productsItems={productItems} handleAddProduct={handleAddProduct}/>}>
                </Route>
                <Route path="/productdetails/:id" element={<ProductDetails cartItems={cartItems}/>} />
                <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart}/>}></Route>
              <Route path="/admin" exact element={<Admin books= {productItems} onEditDB={onEditDB}  onDeleteDB={onDeleteDB} newBook={newBook} onAddDB={onAddDB}/>}/>

            </Routes>
        </div>
      );
}
 
export default Routess;