import { CustomFC } from '../types'
import { Link } from 'react-router-dom'


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

const Header: CustomFC = ({ children }) => {
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
  return (
    <div className={ctn}>
      <span className={title}>
        {children}
      </span>
      <a href="#" className='md:hidden'>
        <svg viewBox="0 0 100 80" width="30" height="30" fill='white' className='hover:bg-gray-500'>
          <rect y="0" width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </a>
    </div>
  )
}

const Ul: CustomFC = ({ children }) => {
  const tailwind = `
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
  return <li className={tailwind}>
    {children}
  </li >
}

function AppBar() {
  return (
    <AppBarCtn>
      <Header><Link to="/">Quantum Snowball</Link></Header>
      <Ul>
        <Li><Link to="/apps">Apps</Link></Li>
        <Li><Link to="/web-dev">Web Dev</Link></Li>
        <Li><Link to="/apple-daily">Apple Daily</Link></Li>
        <Li><Link to="/research">Research</Link></Li>
        <Li><Link to="/data-science">Data Science</Link></Li>
        <Li><Link to="/dotfiles">dotfiles</Link></Li>
      </Ul>
    </AppBarCtn>
  )
}

export default AppBar
