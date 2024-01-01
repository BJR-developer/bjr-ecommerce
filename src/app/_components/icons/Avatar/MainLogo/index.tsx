import React from 'react'
import Image from 'next/image'

interface Props {
  width?: number
  height?: number
  className?: string
  isText?: boolean
}

const MainLogo = ({ width, height, isText, className }: Props) => {
  return (
    <div className={className}>
      {!isText && (
        <Image alt="logo" src={'/main-logo.svg'} width={width || 52} height={height || 52} />
      )}
      {isText && (
        <Image
          alt="logo with text"
          src={'/main_text.png'}
          height={height || 52}
          {...(width && { width })}
        />
      )}
    </div>
  )
}

export default MainLogo
