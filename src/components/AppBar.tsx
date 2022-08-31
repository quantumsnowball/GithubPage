function AppBar() {
  return (
    <div className="appbar-ctn">
      <h3>Quantum Snowball</h3>
      <div style={{ flexGrow: 1 }} />
      <div>
        <ul>
          <li><a href="/apps">Apps</a></li>
          <li><a href="/web-dev">Web Dev</a></li>
          <li><a href="/apple-daily">Apple Daily</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="/data-science">Data Science</a></li>
          <li><a href="/dotfiles">dotfiles</a></li>
        </ul>
      </div>
    </div>
  )
}

export default AppBar
