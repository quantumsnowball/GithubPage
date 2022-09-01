import ReactMarkdown from 'react-markdown'
import content from '../../content/DataScience.md'


export default function DataScience() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

