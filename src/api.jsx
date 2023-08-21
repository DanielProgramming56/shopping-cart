import {useState, useEffect} from "react"
import axios from 'axios';
const getApi = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData(){
			try{
			const response = await axios.get("https://fakestoreapi.com/products",)
			 if (response.status >= 400)
			 {
			 	throw new Error('Server Error')
			 }


			 setData(response.data)

		} catch(error)
		{
			setError(error.message)
		}
		finally{
			setLoading()
		}
	}

	getData()
	},[])



	return {data, error, loading}
}


export default getApi;