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
        const { data } = await commerce.products.list();

        setProducts(data);
    }
    const fetchCart = async () => {
        const newCart = await commerce.cart.retrieve();

        setCart(newCart);
    }
    const handleAddToCart = async (productId, quantity) => {
        const cart = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }
    const handleUpdateCartQuantity = async (lineItemId, quantity) => {
        const { cart } = await commerce.cart.update(lineItemId, { quantity });
        setCart(cart);
    }
    const handleRemoveFromCart = async (lineItemId) => {
        const { cart } = await commerce.cart.remove(lineItemId);
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts()

    }, [])

    useEffect(() => {

        fetchCart();
    }, [cart.total_items])


    return (
        <Router>
            <div>
                <Navbar cart={cart} />
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
