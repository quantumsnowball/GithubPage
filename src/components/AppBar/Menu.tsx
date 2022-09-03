import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import { StateContext } from '../../types/AppBar'
import { useContext } from 'react'


const Ul: CustomFC = ({ children }) => {
  const { menu } = useContext(StateContext)

  const tailwind = `
    ${menu ? '' : 'hidden'}
    self-stretch
    md:flex
    md:items-center
    md:justify-center
    md:content-center
  `

  return (
    <ul className={tailwind}>
      {children}
    </ul>
  )
}

const Li: CustomFC = ({ children }) => {
  const tailwind = `
    px-2
    py-2
    self-stretch
    hover:bg-gray-500
    text-center
    md:text-left
    md:whitespace-nowrap
  `

  return (
    <li className={tailwind}>
      {children}
    </li >
  )
}

const Menu = () => {
  return (
    <Ul>
      <Li><Link to="/apps">Apps</Link></Li>
      <Li><Link to="/web-dev">Web Dev</Link></Li>
      <Li><Link to="/apple-daily">Apple Daily</Link></Li>
      <Li><Link to="/research">Research</Link></Li>
      <Li><Link to="/data-science">Data Science</Link></Li>
      <Li><Link to="/dotfiles">dotfiles</Link></Li>
    </Ul>
  )
}
export default Menu
