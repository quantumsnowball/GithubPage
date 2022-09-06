import ReactMarkdown from 'react-markdown'
import { items } from '../../data/WebDev'


export default function WebDev() {
  return (
    <ReactMarkdown className="markdown">
      {items}
    </ReactMarkdown>
  )
}

