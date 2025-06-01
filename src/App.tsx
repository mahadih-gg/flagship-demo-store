import { Route, Routes } from 'react-router'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
