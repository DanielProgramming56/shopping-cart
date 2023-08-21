import React, {} from "react"
import getApi from "../api.jsx"
import  "../style/produts.scss"
import SingleProduct from "./single-productPage.jsx"

const Products = ({setCartItems, cartItems, data, error, loading}) => {

			return (
		<div className="product-container">

			{
				(loading ? <h1>....loading</h1>

				: error ? <h1>{error}</h1> 

				: (data && data.map((data) =>
				 	<SingleProduct  key={data.id} data={data} setCartItems={setCartItems} cartItems={cartItems}/>
				 )

				)

				)




			}
			
		</div>
	)
}

export default Products