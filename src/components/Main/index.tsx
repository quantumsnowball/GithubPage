import { Route, Routes } from 'react-router-dom'
import AppleDaily from './AppleDaily'
import Apps from './Apps'
import DataScience from './DataScience'
import Dotfiles from './Dotfiles'
import Intro from './Intro'
import Research from './Research'
import WebDev from './WebDev'
import { CustomFC } from '../../types'


const MainCtn: CustomFC = ({ children }) => {
  const css = {
    display: 'flex flex-col flex-grow',
    spacing: 'm-4 p-4'
  }
  const tailwind = Object.values(css).join(' ')
  return (
    <div id="main-ctn" className={tailwind}>
      {children}
    </div>
  )
}

function Main() {
  return (
    <MainCtn>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/apple-daily" element={<AppleDaily />} />
        <Route path="/research" element={<Research />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/dotfiles" element={<Dotfiles />} />
      </Routes>
    </MainCtn>
  )
}

export default Main
