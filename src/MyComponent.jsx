// onchange = event handler primarly with form elements ex input, textarea, select, radio, 
// triggers a function every time the value of input changes
import React, { use, useState } from 'react';


function MyComponet() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [payment, setPayment] = useState('Visa');
    const [shipping, setShipping] = useState('Delivery')

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }


    return(
        <>
           <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value={"Pick Up"} checked= {shipping === 'Pick Up'} onChange={handleShippingChange} />
                Pick Up
            </label>
            <br />

            <label>
                <input type="radio" value={"Delivery"} checked= {shipping === 'Delivery'} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
           </div>
        </>
    );
}

export default MyComponet;