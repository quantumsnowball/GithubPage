import { Markdown } from '../utils'
import { items } from '../../data/AppleDaily'
import { RandomBanner } from './common'


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

