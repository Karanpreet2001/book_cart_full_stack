import React from 'react';

const Admin = ({newBook, books, onEditDB, onDeleteDB, onAddDB, onSubmit, onChange}) => {
    console.log(books);

    const handleChange=(e)=>{
        const target=e.target;

       const newData = { ...books }
       newData[target.id] = target.value
      //  setData(newData);

        if(target.id==="title")
            newBook.title=target.value;
            if(target.id==="author")
            newBook.author=target.value;
            if(target.id==="publishYear")
            newBook.publishYear=target.value;
            if(target.id==="numberInStock")
            newBook.numberInStock=Number(target.value);
            if(target.id==="bid")
            newBook.bid=target.value;
            if(target.id==="category")
            newBook.category=target.value;
            if(target.id==="image")
            newBook.image=target.value;
            if(target.id==="price")
            newBook.price=target.value;
            console.log(newBook.bid);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Submit");
    }

    return ( 
        <div>
        <div>
             <h3 className="display-5 text-center p-1">Add New Book</h3>
        <form onSubmit = {handleSubmit}> 
           <table className="table">
              <tr>
                <td>
                   <div className="form-group">
                        <label htmlFor="bid">Book ID</label>
                        <input type="text" name="bid" id="bid" className="form-control " value={newBook._id} placeholder="b000" onChange={handleChange} />
                   </div>
                </td>
                <td>
                   <div className="form-group">
                        <label htmlFor="title">Book Name</label>
                        <input type="text" name="title" id="title" className="form-control" value={newBook.title} onChange={handleChange} />
                   </div>
                </td>
                <td>
                   <div className="form-group">
                        <label htmlFor="author">Writer</label>
                        <input type="text" name="author" id="author" className="form-control" value={newBook.author} onChange={handleChange} />
                   </div>
                </td>
                <td>
                   <div className="form-group">
                        <label htmlFor="publishYear">Publish Date</label>
                        <input type="text" name="publishYear" id="publishYear" className="form-control" value={newBook.publishYear} placeholder="2000-12-01" onChange={handleChange} />
                   </div>
                </td>
                <td>
                   <div className="form-group">
                        <label htmlFor="numberInStock">Number of Books</label>
                        <input type="number" name="numberInStock" id="numberInStock" className="form-control " value={newBook.numberInStock} onChange={handleChange} />
                   </div>
                </td>

                <td>
                   <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" className="form-control " value={newBook.category} onChange={handleChange} />
                   </div>
                </td>

                <td>
                   <div className="form-group">
                        <label htmlFor="image">Images</label>
                        <input type="text" name="image" id="image" className="form-control " value={newBook.image} placeholder="./img/b000.jpg" onChange={handleChange} />
                   </div>
                </td>

                <td>
                        <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text" name="price" id="price" className="form-control " value={newBook.price} onChange={handleChange} />
                        </div>
                </td>

                <td>
                        <div className="form-group">
                           <br></br>
                                <button
                                        type="button" onClick={() => onAddDB()} className="btn btn-primary m-2">
                                        Add
                                </button>
                        </div>

                </td>
              </tr>
           </table>
        </form>
        </div>

        <div>
              <table className="table">
                <thead>
                    <tr className="table-primary">
                    <td>Book ID</td>
                    <td>Book Name</td>
                    <td>Writer</td>
                    <td>Number of Books</td>
                    <td>Publish Date</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    </tr>
                </thead>

                <tbody>
                    {books.map(book=>( <tr className="table-light" key={book._id}>
                        <td>{book.bid}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.numberInStock}</td>
                        <td>{book.publishYear}</td>
                        <td><button type="button" className="btn btn-warning btn-sm" onClick={()=>onEditDB(book._id)}>Edit</button></td>
                        <td><button type="button" className="btn btn-danger btn-sm" onClick={()=>onDeleteDB(book)}>Delete</button></td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
        </div>
     );
}
 
export default Admin;


