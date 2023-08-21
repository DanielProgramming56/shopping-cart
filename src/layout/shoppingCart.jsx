import React,{} from "react"

const ShoppingCart = ({cartItems}) => {
	const noCart = cartItems.length < 1
	console.log(cartItems)
	return(

		<div className="shoppingCart">
		{noCart && <h1>No Cart</h1>} 

		<div className="singleCart">
			{cartItems && cartItems.map((data) => <div key={data.id}>
				<img  src={data.image} alt={data.id} />
				<h1>{data.title}</h1>
				<h3>{data.price}</h3>
			</div>)}
		</div>
		</div>
	)
}

export default ShoppingCart