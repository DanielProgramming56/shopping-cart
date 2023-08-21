import React, {useState} from "react"
import Logo from "../assets/pngwing.com(1).png"
import shopBag from "../assets/icons8-shopping-bag-64.png"
import  "../style/nav.scss"
import {Link} from "react-router-dom"
const NavBar = ({cart}) => {
	const [isOpen, setIsOpen] = useState(false)

	const trigger = () => {
		setIsOpen(!isOpen)
	}
	return(
		<div className="nav-class">
			<Link to="/" className="logo"> <img src={Logo}/> </Link>
			<img onClick={trigger} className="menu-icon" width="30" height="30" src="https://img.icons8.com/material-sharp/24/ff9300/menu--v1.png" alt="menu--v1"/>
			<div className={`sliding-menu ${isOpen ? 'open' : ''}`}>
				<div className="cancle" onClick={trigger}>
					<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/1A1A1A/delete-sign.png" alt="delete-sign"/>
				</div>
				<div className={!isOpen ? "hide-menu" :  "menu-active"}>
				<Link to="/products"><span onClick={trigger}>Products</span></Link>
				<a><span onClick={trigger}>About</span></a>
				<Link to="/shopping-cart" className="shopBag-Bg" onClick={trigger}><img src={shopBag}/> <div className="cartNumber">{cart}</div></Link>
				</div>
			</div>
			<div className="container-div">
			<Link to="/"><span>Home</span></Link>
			<Link to="/products"><span>Products</span></Link>
			<a><span>About</span></a>
			<Link to="/shopping-cart" className="shopBag-Bg"><img src={shopBag}/> <div className="cartNumber">{cart}</div></Link>
			</div>
		</div>
	);
}

export default NavBar