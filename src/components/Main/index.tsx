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
  const tailwind = `
    p-4
    flex
    flex-col
    flex-grow
    overflow-auto
    md:p-8
 `
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
