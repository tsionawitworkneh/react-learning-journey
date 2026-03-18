
function List(){
    const fruits  = [{id: 1,name: "Apple", calories: 95},  
                     {id: 5,name: "Grapes", calories: 104},
                     {id: 3,name: "Cherry", calories: 5}, 
                     {id: 4,name: "Orange", calories: 62},
                     {id: 2,name: "Banana", calories: 105}
                    ];
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); - Alphabetical 
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); -Reverse Alphabetical
    //fruits.sort((a,b) => a.calories - b.calories); // Sort by calories in ascending order
    //fruits.sort((a,b) => b.calories - a.calories);

    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    {/** const listItems = fruits.map(fruit =><li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> calories</li>)
    return(
        <ul>{listItems}</ul>  
    );*/}

    const listItems = highCalFruits.map(highCalFruit =><li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b> calories</li>)
    return(
        <ul>{listItems}</ul>  
    );
    
}
   
export default List;