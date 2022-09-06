import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Intro'
import { Markdown } from '../utils'


export default function Intro() {
  return (
    <Markdown>
      {items}
    </Markdown>
  )
}
