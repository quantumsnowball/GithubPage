import { Link } from 'react-router-dom'


function AppBar() {
  return (
    <div id="appbar-ctn">
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
    </div>
  )
}

export default AppBar
