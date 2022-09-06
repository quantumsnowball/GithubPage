import { Markdown } from '../utils'
import { items } from '../../data/Apps'


export default function Apps() {
  return (
    <Markdown>
      {items}
    </Markdown>
  )
}

