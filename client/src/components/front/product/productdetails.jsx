  
import React from 'react';
import { useParams } from 'react-router';
const ProductDetails = (props) => {

    // console.log(props.match.params._id);
    const handleBack = () => {
        props.history.push('/product');
    }

    const{_id, token}=useParams();
    console.log(_id);
    return ( 
        <div>
            <h1>Book detail Go here</h1>
            {/* {cartItems.map((product) => (
                <div key={product._id}>
                    <img key={product._id} src={product.image} alt={product.title} width='150px' />
                    <div>
                        <h4>{product.title}</h4>
                    </div>
                    <div>
                        <h4>{product.price}</h4>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>

                </div>
            ))} */}
            
            {/* <img src={match.params.image} alt="Book Image" /><br />
            <h1>Book Title {match.params.title} {match.params._id}</h1>
            <h3>{match.params.category}</h3>
            <h3>{match.params.author}</h3>
            <h3>{match.params.publishYear}</h3>
            <h3>{match.params.price}</h3>
            <button onClick={handleBack}>Go Back</button> */}

        </div>

        
     );
}
 
export default ProductDetails;
