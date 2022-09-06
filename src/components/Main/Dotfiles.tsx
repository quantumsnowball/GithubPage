import { Markdown } from '../utils'
import { items } from '../../data/Dotfiles'


export default function Dotfiles() {
  return (
    <Markdown>
      {items}
    </Markdown>
  )
}

