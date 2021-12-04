import React from 'react';

const ProductInfo = ({match,history}) => {
    

    const handleBack=()=>{
        history.push('/products');
    }
    return ( <div>
        <h1>Event Details {match.params._id}</h1>

        <button onClick={handleBack}>Go Back</button>
       
    </div> );
}
 
export default ProductInfo;