import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './view/Home'
import LoginForm from './view/LoginForm'
import Register from './view/Register'
import Order from './view/Order'
import Products from './view/Products'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/order' element={<Order />} />
      </Route>
    </Routes>
  )
}

export default App
