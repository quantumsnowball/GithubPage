import { Markdown } from '../utils'
import { items } from '../../data/WebDev'


export default function WebDev() {
  return (
    <Markdown>
      {items}
    </Markdown>
  )
}

