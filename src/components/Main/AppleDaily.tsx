import ReactMarkdown from 'react-markdown'
import { items } from '../../data/AppleDaily'


export default function AppleDaily() {
  return (
    <ReactMarkdown className="markdown">
      {items}
    </ReactMarkdown>
  )
}

