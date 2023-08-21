import React, {useState, useEffect} from "react"
import {Link}from "react-router-dom"
import  "../style/home.scss"
const HomeBody = () => {
	return (
		<div className="home-container">
			<div className="home-content">
				<h1>Affordable Fashion for Every Style.</h1>
				<Link to="/products"> <button> SHOP NOW</button> </Link>
			</div>
		</div>
	)
}

export default HomeBody