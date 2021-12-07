import React from 'react';
import {Route,Routes} from "react-router-dom";
import Products from '../front/product/products';
import Admin from '../front/admin';
import SignIn from "../front/signin";
import { Cart } from '../front/cart';
import ProductDetails from '../front/product/productdetails';
import Contact from '../front/product/contact';
import Payment from '../front/payment';

const Routess = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart, onDeleteDB, onEditDB, newBook, onAddDB}) => {
    return (
        <div>
            {console.log(productItems)}
            <Routes>
                <Route path="/"  element={<Products productsItems={productItems} handleAddProduct={handleAddProduct}/>}>
                </Route>
                <Route path="/productdetails/:id" element={<ProductDetails productItems={productItems}/>} />
                <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClearCart={handleClearCart}/>}></Route>
                <Route path="/contact" exact element={<Contact />} />

              <Route path="/admin" exact element={<Admin books= {productItems} onEditDB={onEditDB}  onDeleteDB={onDeleteDB} newBook={newBook} onAddDB={onAddDB}/>}/>
              <Route path="/signin" exact element={<SignIn />} />
          <Route path="/payment" exact element={<Payment />} />
            </Routes>
        </div>
      );
}
 
export default Routess;