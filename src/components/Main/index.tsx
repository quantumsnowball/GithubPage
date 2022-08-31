import { Route, Routes } from 'react-router-dom'
import '../../styles/components/Main.scss'
import Intro from './Intro'


function Main() {
  return (
    <div className="main-ctn">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/apps" element={<Intro />} />
      </Routes>
    </div>
  )
}

export default Main
