import React from 'react';
import {Link} from "react-router-dom";
// import "./Header.css";
import 'bootstrap/dist/css/bootstrap.css'

const Header = ({cartItems}) => {
    return ( 
        <div>

       <header>
          <h1 className="display-2 bg-secondary text-white text-center p-2 mb-0">BOOK STORE</h1>
           </header>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
            <Link to='/cart' >
              <button type="button" className="btn btn-warning position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {cartItems.length === 0 ? "0" : cartItems.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
            
        </div>
      </nav>

      </div>
        
     );
}
 
export default Header;