import React, {useState} from 'react'

function CarComponent(){

    const [cars,setCars] = useState([]);
    const [year,setYear] = useState(new Date().getFullYear());
    const [model,setModel] = useState('');
    const [make,setMake] = useState('');


    function addCar(){
        const newCar = {year: year, 
                        model: model, 
                        make: make
                    }
        setCars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setModel("");
        setMake("");
    }

    function removeCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleYearChange(e){
        setYear(e.target.value);
    }

    function handleModelChange(e){
        setModel(e.target.value);
    }

    function handleMakeChange(e){
        setMake(e.target.value);
    }

    return(
        <div className='car-list'>
            <h2>List of Car objects</h2>
            <ul>
                {cars.map((car, index) => 
                                       <li key={index} >{car.year} {car.model} {car.make}
                                       <button className='dlt-btn' onClick={() => removeCar(index)}>Delete</button>
                                       </li>)
                }
            </ul>


            <input type="number" value={year} onChange={handleYearChange} /><br />
            <input type="text" value={model} onChange={handleModelChange} placeholder='Enter car model' /><br />
            <input type="text" value={make} onChange={handleMakeChange} placeholder='Enter car make' /><br />

            <button onClick={addCar}>Add Car</button>
            
        </div>
    );
}
export default CarComponent;