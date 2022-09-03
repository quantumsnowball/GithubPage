import { CustomFC } from '../../types'
import { State } from '../../types/AppBar'
import {
  createContext,
  useState,
} from 'react'
import Header from './Header'
import Menu from './Menu'


const StateContext = createContext({} as State)

const AppBarCtn: CustomFC = ({ children }) => {
  const tailwind = `
    p-4
    flex
    flex-col
    justify-between
    items-center
    bg-gray-900
    text-white
    select-none
    md:flex-row
  `
  return (
    <nav id="appbar-ctn" className={tailwind}>
      {children}
    </nav>
  )
}

function AppBar() {
  const [menu, setMenu] = useState(false)

  return (
    <StateContext.Provider value={{ menu, setMenu }}>
      <AppBarCtn>
        <Header />
        <Menu />
      </AppBarCtn>
    </StateContext.Provider>
  )
}

export default AppBar
