import './App.scss'
import {useState} from "react"
import NavBar from "./navBar/NavBar.jsx"
import HomeBody from "./layout/home-body.jsx"
import Products from "./layout/product.jsx"
import SingleProduct from "./layout/SingleProduct.jsx"
import ShoppingCart from "./layout/shoppingCart.jsx"
import { HashRouter, Route, Routes } from "react-router-dom";
import getApi from "./api.jsx"
function App() {
  const [cartItems, setCartItems] = useState([])
  const {data, error, loading} = getApi();

  return (
    <HashRouter >
    <NavBar   cart={cartItems.length}/>
    <div className="general-container" >
    <Routes>
    <Route  path="/" element={<HomeBody />} />
     <Route  path="/products" element={<Products setCartItems={setCartItems} cartItems={cartItems} data={data} error={error} loading={loading}/>} />
     <Route path="/products/:id" element={<SingleProduct  data={data} loading={loading} />} />
     <Route path="/shopping-cart" element={<ShoppingCart  cartItems={cartItems} setCartItems={setCartItems}  />} />
    </Routes>
    </div>
    </HashRouter>
  )
}

export default App
