import { Route, Routes } from 'react-router'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import EcomHome from './pages/ecom/EcomHome'
import TelcoHome from './pages/telco/TelcoHome'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={
            <TelcoHome />
          } />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="/ecom" element={<EcomHome />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
