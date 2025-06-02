import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const Product = lazy(() => import('./pages/Product'))

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          } />
          <Route path="/product" element={
            <Suspense fallback={<Loading />}>
              <Product />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
