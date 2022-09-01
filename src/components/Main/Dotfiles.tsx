import ReactMarkdown from 'react-markdown'
import content from '../../content/Dotfiles.md'


export default function Dotfiles() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

