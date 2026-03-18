function Card(){
    return(
        <div className="card">
            <img className="card-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="My Picture" width={200} height={200}/>
            <h2 className="card-title">Abel Tesfaye</h2>
            <p className="card-text">Software engineer and designer</p>
        </div>
    );
}

export default Card;