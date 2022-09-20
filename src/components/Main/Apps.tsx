import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/Apps'


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

