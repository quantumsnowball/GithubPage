import { CustomFC } from '../types'
import { Link } from 'react-router-dom'


const AppBarCtn: CustomFC = ({ children }) => {
  const css = {
    display: 'flex flex-row',
    boxAlignment: 'justify-center content-center items-center',
    colors: 'bg-gray-700 text-white',
  }
  const tailwind = Object.values(css).join(' ')
  return (
    <div id="appbar-ctn" className={tailwind}>
      {children}
    </div>
  )
}

function AppBar() {
  return (
    <AppBarCtn>
      <h3><Link to="/">Quantum Snowball</Link></h3>
      <div style={{ flexGrow: 1 }} />
      <div>
        <ul>
          <li><Link to="/apps">Apps</Link></li>
          <li><Link to="/web-dev">Web Dev</Link></li>
          <li><Link to="/apple-daily">Apple Daily</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/data-science">Data Science</Link></li>
          <li><Link to="/dotfiles">dotfiles</Link></li>
        </ul>
      </div>
    </AppBarCtn>
  )
}

export default AppBar
