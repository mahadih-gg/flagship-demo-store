import { FlagshipContainer } from "@thinkflagship/web-shorts"
import "@thinkflagship/web-shorts/dist/styles.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FlagshipContainer
        licenseKey="pk_live_0fbf4d4204cfcd00219f2dd81d459fa8593fc27ab58f02ea.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVtbyBXZWIiLCJwbGF0Zm9ybVR5cGUiOiJXRUIiLCJkb21haW4iOnsiZG9tYWluIjoiaHR0cHM6Ly9kZW1vLmhvcml6b25leHAuY29tIiwidmVyaWZpZWQiOmZhbHNlfSwiZXhwaXJlc0F0IjoiMjEyNS0wNS0yNlQxMzoxMTo0NC44OTFaIiwiY3JlYXRlZEJ5IjoiNjg1NDA5ODQ0MGJlM2U4ODI2NGY0NTZjIiwidGVuYW50SWQiOiI2ODU0MDk4NDQwYmUzZTg4MjY0ZjQ1NjciLCJfaWQiOiI2ODU0MGM5MGMyNWVkMjllZGQ0ZGU4NDEiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE3NTAzMzg3MDQsImV4cCI6NDkwMzkzODcwNH0.HATiUrEpOApzmYIrL_AVW6y52TNIY_yc3z4Qi7-9kWg"
      >
        <App />
      </FlagshipContainer>
    </BrowserRouter>
  </StrictMode>,
)
