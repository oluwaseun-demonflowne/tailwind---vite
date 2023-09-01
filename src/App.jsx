import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Ecommerce from './components/Ecommerce'
import Cart from './components/Cart'
import { Shop } from './components/item'
import { useState } from 'react'


function App() {
  const [cart, setCart] = useState([])

  const addToCart = (i) => {
    setCart(oldCart => [...oldCart , i])
  }

  const removeItem = (id) => {
    const newCart = cart.filter((i) => i.id !== id)
    setCart(newCart)
  }

  return (
      <main>
        <Nav />
        <Routes>
          <Route path='/' element={<Ecommerce Shop={Shop} cartItem={cart} add={addToCart} />} />
          <Route path='/cart' element={<Cart removeFromCart={removeItem} cartItem={cart}/>} />
        </Routes>
      </main>
    )
}

export default App
