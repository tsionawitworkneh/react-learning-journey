// onchange = event handler primarly with form elements ex input, textarea, select, radio, 
// triggers a function every time the value of input changes
import React, { use, useState } from 'react';


function MyComponet() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [payment, setPayment] = useState('Visa');
    const [shipping, setShipping] = useState('Delivery');
    const [car, setCar] = useState({year:2026,
                                    make:"BWD", 
                                    model: "BYD Dolphin"
                                });

    //update state of an array 
    const [food,setFood] = useState(['Apple', 'Orange', 'Banana']);                            

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

    function handleYearChange(e){
        setCar(car =>({...car,year: e.target.value }));
    }

    function handleMakeChange(e){
        setCar(car => ({...car,make: e.target.value }));
    }

    function handleModelChange(e){
        setCar(car => ({...car,model: e.target.value }));
    }

    //function to handle add and remove
    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFood(f => [...f, newFood]);
    } 

    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i !== index));
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

           <div>
            <input type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="tetx" value={car.model} onChange={handleModelChange} /> <br />
            <p>My favorite car is: {car.year} {car.make} {car.model}</p>
           </div>

           <div>
               <h2>List of Foods</h2>
               <ul>
                   {food.map((food, index) => 
                        <li key={index} onClick={() => handleRemoveFood(index)}>{food}
                        </li>
                    )}
               </ul>
               <input type="text" id='foodInput' placeholder='Enter a food' />
               <button onClick={handleAddFood}>Add Food</button>
           </div>
        </>
    );
}

export default MyComponet;