import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Apps'


export default function Apps() {
  return (
    <ReactMarkdown>
      {items}
    </ReactMarkdown>
  )
}

