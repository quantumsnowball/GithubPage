import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Research'


export default function Research() {
  return (
    <ReactMarkdown className="markdown">
      {items}
    </ReactMarkdown>
  )
}

