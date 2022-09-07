import { CustomFC } from '../../types'
import Header from './Header'
import Menu from './Menu'


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
  return (
    <AppBarCtn>
      <Header />
      <div className='flex-grow' />
      <Menu />
    </AppBarCtn>
  )
}

export default AppBar
