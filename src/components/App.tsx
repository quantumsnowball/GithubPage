import { BrowserRouter } from 'react-router-dom'
import { CustomFC } from '../types'
import AppBar from './AppBar'
import Main from './Main'


const AppCtn: CustomFC = ({ children }) => {
  const tailwind = `
    h-screen
    flex
    flex-col
    justify-between
 `
  return (
    <div id="app-ctn" className={tailwind}>
      {children}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppCtn>
        <AppBar />
        <Main />
      </AppCtn>
    </BrowserRouter>
  )
}

export default App
