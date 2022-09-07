import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'


const items = {
  "/apps": "Apps",
  "/web-dev": "Web Dev",
  "/apple-daily": "Apple Daily",
  "/research": "Research",
  "/data-science": "Data Science",
  "/dotfiles": "dotfiles"
}

const Ul: CustomFC = ({ children }) => {
  const menu = useSelector((s: RootState) => s.layout.menu)

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
  const dispatch = useDispatch()

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

  const handleClick = () => dispatch(layoutActions.closeMenu())

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
