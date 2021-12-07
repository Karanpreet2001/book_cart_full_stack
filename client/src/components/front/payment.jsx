import React from 'react';
import { useLocation } from 'react-router';


const Payment = () => {

    const location = useLocation();
    const { prodPrice } = location.state;
    console.log(prodPrice);

    return (
        <div>
            <h3 className="display-5 text-center p-1">Checkout</h3>
            <div className="container p-4">
                <div className="text-center">
                    <h5>Shipping Detail</h5>
                    <p>
                        5678 Broadway st, <br></br>Vancouver BC A1B2C4<br></br>karanpreet@gmail.com
                    </p>
                </div>
            </div>

            <div class="text-center">
                <div class="col">
                    <p class="text-muted mb-2">Total Amount</p>
                    {/* <hr class="mt-0"> */}
                </div>
            </div>
            <div class="text-center">
                <div class="col">  <h1>${prodPrice.toFixed(2)}</h1> </div>
            </div>
        </div>);
}

export default Payment;