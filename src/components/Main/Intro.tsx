import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/Intro'


export default function Intro() {
  return (
    <>
      <RandomBanner keywords="energy,work" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}
