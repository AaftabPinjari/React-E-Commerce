import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Checkout from './components/checkoutForm/checkout/Checkout'
import { commerce } from './lib/commerce'



const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})



    // all the api calls to commerce.js for editing the products
    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data);
    }
    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve());
    }
    const handleAddToCart = async (productId, quantity) => {
        const cart = await commerce.cart.add(productId, quantity)

        setCart(cart);
    }
    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()
        setCart(cart);
    }


    //

    useEffect(() => {
        fetchProducts()
        fetchCart();
    }, [])


    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                {/* switch between products and cart */}
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />
                    </Route>


                </Switch>
            </div>
        </Router>
    )
}

export default App
