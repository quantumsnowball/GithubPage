import { FC, useState } from "react"
import ImgIcon from '../../assets/img-skeleton.svg'


const SOURCE = 'https://source.unsplash.com/'


interface Dimension {
  width: number
  height: number
}

const Skeleton: FC<{ className?: string } & Dimension> = ({ width, height, className = '' }) => {
  const hpct = Math.round(height / width * 100)
  return (
    <div
      className={`
        animate-pulse
        ${className}
      `}
    >
      <div
        style={{ height: `${hpct}vw` }}
        className={`
          flex justify-center items-center 
          bg-gray-300 dark:bg-gray-800
          rounded
        `}
      >
        <ImgIcon className="w-12 h-12 text-gray-500" />
      </div>
    </div>
  )
}

interface RandomBannerProps extends Dimension {
  keywords?: string
}

export const RandomBanner: FC<RandomBannerProps> = ({ width, height, keywords = '' }) => {
  const [loaded, setLoaded] = useState(false)

  const src = `${SOURCE}/random/${width}x${height}/?${keywords}`
  const desc = `Banner-${width}x${height}`

  return (
    <>
      {loaded ? null :
        <Skeleton
          className="pb-8"
          {...{ width, height }}
        />
      }
      <img
        className="pb-8"
        src={src}
        alt={desc}
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: 'none' }}
      />
    </>
  )
}

