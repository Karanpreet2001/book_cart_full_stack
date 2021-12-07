import React from 'react';
import { useLocation } from 'react-router';

const ProductDetails = () => {

    const location = useLocation();
    const { product } = location.state;

    console.log(product);

    return (
        <div className="container w-50 p-4">
            <div className="row">
                <div className="col-3">
                    <img src={product.image} alt={product.title} width='150px' />
                </div>
                <div className="col">
                    <h3>{product.title}</h3>
                    <br></br>
                    <h6>{product.category}</h6>
                    <h6>{product.author}</h6>
                    <h6>{product.publishYear}</h6>
                    <h6>${product.price}</h6>
                    {/* <button onClick={handleBack}>Go Back</button> */}
                </div>
                <div className="row p-2 m-2">
                    <h6>Where does it come from?</h6>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
