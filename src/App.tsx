import { Route, Routes } from 'react-router'
import DefaultLayout from './layouts/DefaultLayout'
import DailyStarPage from './pages/daily-star'
import DemoStorePage from './pages/demo-store'
import EcomPage from './pages/ecom'
import LandingPage from './pages/landing'
import OttPage from './pages/ott'
import RestaurantPage from './pages/restaurant'
import SportsPage from './pages/sports'
import TelcoPage from './pages/telco'
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
          <Route path="/" element={<DemoStorePage />} />
          <Route path="/free-trial" element={<LandingPage />} />
          <Route path="/telco" element={<TelcoPage />} />
          <Route path="/ecom" element={<EcomPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/ott" element={<OttPage />} />
          <Route path="/dailystar" element={<DailyStarPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
