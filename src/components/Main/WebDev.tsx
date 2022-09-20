import { Markdown } from '../utils'
import { items } from '../../data/WebDev'
import { RandomBanner } from './common'


export default function WebDev() {
  return (
    <>
      <RandomBanner keywords="webdev" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

