import ReactMarkdown from 'react-markdown'
import { items } from '../../data/DataScience'


export default function DataScience() {
  return (
    <ReactMarkdown className="markdown">
      {items}
    </ReactMarkdown>
  )
}

