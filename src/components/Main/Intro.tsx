import ReactMarkdown from 'react-markdown'
import content from '../../content/Intro.md'


export default function Intro() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}
