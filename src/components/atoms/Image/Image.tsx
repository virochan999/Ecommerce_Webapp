import React, { forwardRef } from "react"
import { ImageElement } from "./Image.styled"

type ImagePropTypes = {
  imageSource: string
  altText: string
  imageWidth?: number
  imageHeight?: number
  imageType?: string
  rounded?: boolean
  onClick?: () => void
  ref?: React.RefObject<HTMLImageElement>
}

const Image = forwardRef<HTMLImageElement, ImagePropTypes>(
  (
    {
      imageSource,
      altText,
      imageWidth,
      imageHeight,
      imageType,
      rounded,
      onClick,
    },
    ref
  ) => {
    return (
      <ImageElement
        src={imageSource}
        alt={altText}
        width={imageWidth}
        height={imageHeight}
        className={imageType}
        $rounded={rounded}
        ref={ref}
        onClick={onClick}
      />
    )
  }
)

export default Image
