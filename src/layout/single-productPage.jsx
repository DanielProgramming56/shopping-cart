import {useState} from "react"
import  "../style/produts.scss"
import addToCart from "../Cart/addCart.js"
import removeFromCart from "../Cart/removeCart.js"
import {Link} from "react-router-dom"
const SingleProduct = ({data, description, setCartItems, cartItems}) => {
	const [cartCount, setCartCount] = useState(0)
	const increaseItem = () => {
		
		if(cartCount < 1){
			addToCart(data,cartItems, setCartItems)
		}
		setCartCount(cartCount + 1)
	}

	const decrementItem = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }

        if (cartCount <= 1)
        {
        	removeFromCart(data.id, cartItems,setCartItems)
        }

    };

	const wordCount = data.description;

	function truncateTextToWords(text, numWords) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Check if the number of words is less than or equal to the desired limit
    if (words.length <= numWords) {
        return text; // Return the original text if it's within the limit
    } else {
        // If the text exceeds the limit, truncate it and join it back into a string
        const truncatedText = words.slice(0, numWords).join(" ");
        return truncatedText + "..."; // Add ellipsis to indicate truncation
    }
}

	const truncatedDescription = truncateTextToWords(wordCount, 10)

	return (
		
			<div className="productName">
			
			<img src={data.image}/>
			<div className="down-product">
				<h3>{data.title}</h3>
				<h2>${data.price}</h2>
				<div className="down-descart">
					<span>{truncatedDescription}<Link style={{color: 'blue'}} to={`/products/${data.id}`}>more</Link></span>
					<div className="cart">
						<button onClick={increaseItem}>+</button>
						<span>{cartCount}</span>
						<button onClick={decrementItem}>-</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default SingleProduct