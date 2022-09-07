import { CustomFC } from '../../types'
import Header from './Header'
import Menu from './Menu'
import { useDispatch } from 'react-redux'
import { themeActions } from '../../redux/slices/themeSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


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
  const dispatch = useDispatch()
  const mode = useSelector((s: RootState) => s.theme.mode)

  return (
    <AppBarCtn>
      <Header />
      <button onClick={() => dispatch(themeActions.toggleMode())}>
        {mode}
      </button>
      <div className='flex-grow' />
      <Menu />
    </AppBarCtn>
  )
}

export default AppBar
