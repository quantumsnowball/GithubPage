import ReactMarkdown from 'react-markdown'
import content from '../../content/Apps.md'


export default function Apps() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

