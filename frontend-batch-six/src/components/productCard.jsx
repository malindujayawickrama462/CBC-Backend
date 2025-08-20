import "./productCard.css";

export function ProductCard(props){
    console.log(props)
    return(
        <div className="card">
            <img src="https://picsum.photos/200/300?grayscale" className="Image"/>
            <h1>{props.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h2>Price : $1000</h2>
            <button className="addToCart">Add to Cart</button>
            <button className="buynow">buy Now</button>

        </div>
    )
}