interface RandomBannerProps {
  width: number,
  height: number,
  keywords?: string
}

export const RandomBanner = ({ width, height, keywords = '' }: RandomBannerProps) => {
  const src = `https://source.unsplash.com/random/${width}x${height}/?${keywords}`
  const desc = `Banner-${width}x${height}`
  return (
    <img
      className="pb-8 max-w-7xl"
      src={src}
      alt={desc}
    />
  )
}

