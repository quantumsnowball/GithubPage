import { BrowserRouter } from 'react-router-dom'
import '../styles/components/App.scss'
import AppBar from './AppBar'
import Main from './Main'


function App() {
  return (
    <BrowserRouter>
      <div className="app-ctn">
        <AppBar />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
