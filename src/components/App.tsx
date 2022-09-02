import { BrowserRouter } from 'react-router-dom'
import AppBar from './AppBar'
import Main from './Main'


function App() {
  return (
    <BrowserRouter>
      <div id="app-ctn">
        <AppBar />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
