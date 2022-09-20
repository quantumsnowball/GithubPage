import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/Research'


export default function Research() {
  return (
    <>
      <RandomBanner keywords="research,science" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

