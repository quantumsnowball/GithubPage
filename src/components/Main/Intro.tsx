import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Intro'


export default function Intro() {
  return (
    <ReactMarkdown>
      {items}
    </ReactMarkdown>
  )
}
