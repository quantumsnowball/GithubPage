import { BrowserRouter } from 'react-router-dom'
import { CustomFC } from '../types'
import AppBar from './AppBar'
import Main from './Main'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'


const AppCtn: CustomFC = ({ children }) => {
  const mode = useSelector((s: RootState) => s.theme.mode)

  const tailwind = `
    fixed
    h-full
    flex
    flex-col
    justify-between
    dark:bg-gray-600
    dark:text-white
 `
  return (
    <div id="theme-ctn" className={mode}>
      <div id="app-ctn" className={tailwind}>
        {children}
      </div>
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
