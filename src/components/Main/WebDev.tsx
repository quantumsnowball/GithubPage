import ReactMarkdown from 'react-markdown'
import content from '../../content/WebDev.md'


export default function WebDev() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

