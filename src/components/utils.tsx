import { FC } from 'react'
import ReactMarkdown from "react-markdown";


interface Props {
  children: string
}

export const Markdown: FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      className="markdown"
      components={{
        a: ({ node, ...props }) => <a target='_blank' {...props} />
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
