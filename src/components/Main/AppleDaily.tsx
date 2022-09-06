import { Markdown } from '../utils'
import { items } from '../../data/AppleDaily'


export default function AppleDaily() {
  return (
    <Markdown>
      {items}
    </Markdown>
  )
}

