import ReactMarkdown from 'react-markdown'
import { items } from '../../data/Intro'
import { Markdown } from '../utils'
import { RandomBanner } from './common'


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
