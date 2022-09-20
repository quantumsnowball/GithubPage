import { Markdown } from '../utils/markdown'
import { RandomBanner } from '../utils/banner'
import { items } from '../../data/Dotfiles'


export default function Dotfiles() {
  return (
    <>
      <RandomBanner keywords="construction" width={800} height={250} />
      <Markdown>
        {items}
      </Markdown>
    </>
  )
}

