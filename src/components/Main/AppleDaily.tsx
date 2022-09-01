import ReactMarkdown from 'react-markdown'
import content from '../../content/AppleDaily.md'


export default function AppleDaily() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

