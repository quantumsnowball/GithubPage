import { Markdown } from '../utils'
import { items } from '../../data/Dotfiles'
import { RandomBanner } from './common'


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

