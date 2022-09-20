import { Markdown } from '../utils'
import { items } from '../../data/Research'
import { RandomBanner } from './common'


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

