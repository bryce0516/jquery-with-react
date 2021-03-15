import {useEffect, useState} from 'react'


const useFetch = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		fetching()
	}, [])
	const fetching = async () => {
		const abortController = new AbortController();

		await fetch("http://localhost:3001/events")
			.then(response => {
				return response.json()
			})
			.then(res => {
				setData({
					...data,
					data: res
				})
			})
			.catch(err => {
				if( err.name === "AbortError"){
					console.log("abort err")
				}
				console.log('just err')
			})	
			return () => abortController.abort()		
	}
	return data
};

export default useFetch;
