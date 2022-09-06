import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import { StateContext } from '../../types/AppBar'
import { useContext } from 'react'
import MenuOpenIcon from '../../assets/hamburger.svg'
import MenuCloseIcon from '../../assets/cross.svg'


const Header: CustomFC = ({ children }) => {
  const { menu, setMenu } = useContext(StateContext)
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

  const handleClick = () => setMenu(!menu)

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
