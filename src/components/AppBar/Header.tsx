import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import { StateContext } from '../../types/AppBar'
import { useContext } from 'react'


const Header: CustomFC = ({ children }) => {
  const { menu, setMenu } = useContext(StateContext)
  const ctn = `
    self-stretch
    flex
    justify-between
  `
  const title = `
    text-2xl
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
        <svg viewBox="0 0 100 80" width="30" height="30" fill='white' className='hover:bg-gray-500'>
          <rect y="0" width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </a>
    </div>
  )
}

export default Header
