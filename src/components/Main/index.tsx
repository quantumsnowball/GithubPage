import '../../styles/components/Main.scss'
import ReactMarkdown from 'react-markdown'
import content from '../../content/main.md'


function Main() {
  return (
    <div className="main-ctn">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Main
