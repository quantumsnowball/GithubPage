import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from "react"
import './styles/index.css'
import App from './components/App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
