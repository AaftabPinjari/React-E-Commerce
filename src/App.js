import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { commerce } from './lib/commerce'



const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})


    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data);
    }
    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(products)
    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
