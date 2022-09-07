import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import MenuOpenIcon from '../../assets/hamburger.svg'
import MenuCloseIcon from '../../assets/cross.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'


const Header: CustomFC = ({ children }) => {
  const dispatch = useDispatch()
  const menu = useSelector((s: RootState) => s.layout.menu)

  const ctn = `
    self-stretch
    flex
    justify-between
  `
  const title = `
    text-2xl
    font-bold
    cursor-pointer
    hover:bg-gray-500
  `

  const handleClick = () => dispatch(layoutActions.toggleMenu())

  return (
    <div className={ctn}>
      <span className={title}>
        <Link to="/">Quantum Snowball</Link>
      </span>
      {children}
      <a href="#" className='md:hidden' onClick={handleClick}>
        {menu ? <MenuCloseIcon /> : <MenuOpenIcon />}
      </a>
    </div>
  )
}

export default Header
