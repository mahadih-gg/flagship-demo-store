import { Route, Routes } from 'react-router'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import EcomHome from './pages/ecom/EcomHome'
import LandingPage from './pages/landing/LandingPage'
import TelcoHome from './pages/telco/TelcoHome'

function App() {

  return (
    <>
      <Routes>
        {/* <Route element={<DemoLayout />}>
          <Route path="/" element={<DemoHome />} />
          <Route path="/product" element={<DemoProduct />} />
        </Route> */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/telco" element={<TelcoHome />} />
          <Route path="/ecom" element={<EcomHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
