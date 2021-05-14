import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { commerce } from './lib/commerce'



const App = () => {
    const [products, setProducts] = useState([])


    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App
