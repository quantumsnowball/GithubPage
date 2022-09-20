import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/WebDev'


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

