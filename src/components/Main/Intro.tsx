import ReactMarkdown from 'react-markdown'
import content from '../../content/main.md'


export default function Intro() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}
