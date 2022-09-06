import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import { StateContext } from '../../types/AppBar'
import { useContext } from 'react'


const items = {
  "/apps": "Apps",
  "/web-dev": "Web Dev",
  "/apple-daily": "Apple Daily",
  "/research": "Research",
  "/data-science": "Data Science",
  "/dotfiles": "dotfiles"
}

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

const Li = ({ to, text }: {
  to: string,
  text: string
}) => {
  const { setMenu } = useContext(StateContext)

  const tailwindLi = `
    self-stretch
    hover:bg-gray-500
    text-center
    md:text-left
    md:whitespace-nowrap
  `
  const tailwindLink = `
    inline-block
    w-full
    px-2
    py-2
  `

  const handleClick = () => setMenu(false)

  return (
    <li className={tailwindLi}>
      <Link className={tailwindLink} to={to} onClick={handleClick}>{text}</Link>
    </li >
  )
}

const Menu = () => {
  return (
    <Ul>
      {Object.entries(items).map(([to, text]) => <Li key={to} {...{ to, text }} />)}
    </Ul>
  )
}

export default Menu
