import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Dotfiles'


export default function Dotfiles() {
  return (
    <ReactMarkdown>
      {items}
    </ReactMarkdown>
  )
}

