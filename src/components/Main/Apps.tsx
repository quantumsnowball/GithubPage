import { Markdown } from '../utils'
import { items } from '../../data/Apps'
import { RandomBanner } from './common'


export default function Apps() {
  return (
    <>
      <RandomBanner keywords="app" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

