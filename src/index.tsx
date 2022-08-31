import ReactDOM from 'react-dom/client'
import { StrictMode } from "react"
import './styles/index.scss'
import App from './components/App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
