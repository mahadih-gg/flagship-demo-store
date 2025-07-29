import { Route, Routes } from 'react-router'
import DefaultLayout from './layouts/DefaultLayout'
import DemoStore from './pages/demo-store/DemoStore'
import EcomHome from './pages/ecom/EcomHome'
import LandingPage from './pages/landing/LandingPage'
import RestaurantHome from './pages/restaurant/RestaurantHome'
import SportsHome from './pages/sports/SportsHome'
import TelcoHome from './pages/telco/TelcoHome'
import './styles/App.css'

function App() {

  return (
    <>
      <Routes>
        {/* <Route element={<DemoLayout />}>
          <Route path="/" element={<DemoHome />} />
          <Route path="/product" element={<DemoProduct />} />
        </Route> */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<DemoStore />} />
          <Route path="/free-trial" element={<LandingPage />} />
          <Route path="/telco" element={<TelcoHome />} />
          <Route path="/ecom" element={<EcomHome />} />
          <Route path="/sports" element={<SportsHome />} />
          <Route path="/restaurant" element={<RestaurantHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
