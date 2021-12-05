import React, {useState, useEffect} from 'react';
  import Header from './components/front/header/header';
  import {getBooks} from "./data/data";
  import {BrowserRouter as Router} from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.css';
  import Routess from './components/Routes/Routess';
  import axios from 'axios';



  function App() {
  
    const [books,setBooks]=useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState();
    const [newBook, setNewBook]=useState({});
  

 useEffect(()=>{
   axios
    .get("http://localhost:5000/api/CartBookInfo")
    .then(resp=>{
      console.log(resp,resp.data);
      setBooks(resp.data);
    })
    .catch(err=>{
      console.log(err);
    })

 },[]); 



    const handleAddProduct = (product) => {

      console.log(product);
      console.log("Updated Book");
      const {data}= axios.put("http://localhost:5000/api/CartBookInfo/"+product._id);
      console.log(data);
      
      const productExist = cartItems.find((item) => item.bid === product.bid);
      if (productExist){
        setCartItems(cartItems.map((item) => item.bid === product.bid ? {...productExist, quantity: productExist.quantity + 1}: item)
        );
      }
      else{
        setCartItems([...cartItems, {...product, quantity: 1}]); //new item is added if cart is empty
      }
    };
  
    const handleRemoveProduct = (product) => {

      console.log(product);
      console.log("Updated Book");
      const {data}= axios.put("http://localhost:5000/api/CartBookInfo/"+product._id);
      console.log(data);

      const productExist = cartItems.find((item) => item.bid === product.bid);
      if(productExist.quantity === 1){
        setCartItems(cartItems.filter((item) => item.bid !== product.bid));
      }
      else{
        setCartItems(cartItems.map((item) => item._id === product._id ? {...productExist, quantity: productExist.quantity - 1}: item
        ));
      }
    };
  
    const handleClearCart = () => {
      setCartItems([]);
    }
  
    const handleChangeItem = (product) => {
      const productExist = selectedItem.find((item) => item._id === product._id);
      setCartItems([...selectedItem, { ...product, quantity: 1 }]); //new item is added if cart is empty
  
      // setCartItems(selectedItem.map((item) => item._id === product._id ? { ...productExist, quantity: productExist.quantity + 1 } : item));
  
    }


    const handleDeleteDB=(book)=>{
    

      console.log("Book Deleted");

    const {data}=axios.delete("http://localhost:5000/api/CartBookInfo/"+book._id);

    const newBooks=books.filter((b)=>b._id !== book._id);

    console.log(data, newBooks);
    setBooks([...newBooks]);
    }

    const handleEditDB=(product)=>{
      const { data } = axios.put("http://localhost:5000/api/CartBookInfo/" + product.bid);
      const productExist = books.find((item) => item._id === product._id);
      console.log(data, productExist);


      // const index = data.indexOf(data._id);
      // const selectedProduct = data[index];
      console.log("Edit");
    }
  
    const handleAddDB=()=>{
      console.log("ADD");

      console.log(newBook);
      const {data}= axios.post("http://localhost:5000/api/CartBookInfo",newBook);
      console.log(data);
  
      if(typeof data==='object'){
        const book=data;
        console.log(book);
        const newBooks=[...books,book];
        setBooks([...newBooks]);
      }else{
        console.log("Can not add Objrct");
      }
    }
  
    return (
    <div>
      {console.log(books)}
  
      <Router>
        <Header cartItems={cartItems}/>
        <Routess productItems={books} cartItems = {cartItems} 
            handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleChangeItem={handleChangeItem} onEditDB={handleEditDB} onDeleteDB={handleDeleteDB} newBook={newBook} onAddDB={handleAddDB}/>
      </Router>
  
      </div>
    );
  }
  
  export default App;


