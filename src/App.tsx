import { Route, Routes } from 'react-router'
import './App.css'
import DemoStoreLayout from './layouts/DemoStoreLayout'
import EcommerceLayout from './layouts/EcommerceLayout'

import Home from './pages/demo/Home'
import Product from './pages/demo/Product'

import EcommerceHome from './pages/ecom/EcommerceHome'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DemoStoreLayout />}>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/product" element={
            <Product />
          } />
        </Route>
        <Route element={<EcommerceLayout />}>
          <Route path="/ecom" element={<EcommerceHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
