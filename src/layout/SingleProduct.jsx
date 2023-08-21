import  React,{} from "react"
import {useParams} from "react-router-dom"

const SingleProduct = ({data, loading}) => {
const {id} = useParams()
let product;

if (loading)
{
	console.log(loading)
}else{
	product = data.find((p) => p.id === parseInt(id));
	console.log(product)
}
	return (
		<div className="SingleProduct">
			{loading ? <p>...loading</p> : 
			<div className="seletedLayout">
			<img src={product.image}  alt={product.id}/>
			<div className="titlePrice">
				<h3>{product.title}</h3>
				<h4>${product.price}</h4>
			</div>
			<span>{product.description}</span>
			<p>{product.rating['rate']}</p>
			<p>{product.rating['count']} Available</p>
			<p>{product.category} Available</p>
			</div>
		}
		</div>
	)
}
export default SingleProduct