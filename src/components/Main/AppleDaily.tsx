import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/AppleDaily'


export default function AppleDaily() {
  return (
    <>
      <RandomBanner keywords="newspaper,research" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

