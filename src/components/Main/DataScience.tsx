import { Markdown } from '../utils'
import { items } from '../../data/DataScience'
import { RandomBanner } from './common'


export default function DataScience() {
  return (
    <>
      <RandomBanner keywords="ai" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

