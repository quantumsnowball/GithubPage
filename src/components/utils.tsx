import { FC } from 'react'
import ReactMarkdown from "react-markdown";


const tailwindLi = `
  my-3
  p-2
  rounded
  shadow-2xl
`

interface Props {
  children: string
}

export const Markdown: FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      className="markdown"
      components={{
        a: ({ node, ...props }) => <a target='_blank' {...props} />,
        ul: 'div',
        li: ({ children }) => <div className={tailwindLi}>{children}</div>,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
