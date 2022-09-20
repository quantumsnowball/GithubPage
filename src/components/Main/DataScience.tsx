import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/DataScience'


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

