import ReactMarkdown from 'react-markdown'
import content from '../../content/Research.md'


export default function Research() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

