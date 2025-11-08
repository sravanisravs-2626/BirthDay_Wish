import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BirthdayCard from './components/BirthdayCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BirthdayCard />
  </StrictMode>,
)
