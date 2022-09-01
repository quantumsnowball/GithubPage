import ReactMarkdown from 'react-markdown'
import { items } from '../../data/WebDev'


export default function WebDev() {
  return (
    <ReactMarkdown>
      {items}
    </ReactMarkdown>
  )
}

