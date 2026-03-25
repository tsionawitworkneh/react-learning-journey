import styles from './Button.module.css';

function Button(){
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            alert(`Button clicked ${count} times!`);
        }
        else{
            alert("Button clicked too many times! Please stop.");
        }
    };
    const handleClick2= name => alert(`Hello, ${name}!`);

    const handleClick3 = (e) => e.target.textContent = "Clicked!!!";

    return(
        <button className={styles.btn} onClick={(e) => handleClick3(e)}>Click me 😊​</button>
        
        
    );
}

//<button className={styles.btn} onClick={() =>handleClick2("Abel")}>Click me 😊​</button>
export default Button;