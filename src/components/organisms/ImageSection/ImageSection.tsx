import { useState } from "react"
import { ImageSectionWrapper } from "./ImageSection.styled"

type ImageSectionPropTypes = {
  images?: string[]
}

const ImageSection = ({ images }: ImageSectionPropTypes) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleImageChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <>
      {images && images.length !== 0 && (
        <ImageSectionWrapper>
          <div
            className="product-image"
            style={{ backgroundImage: `url(${images[activeIndex]})` }}
          ></div>
          <div className="product-carousel">
            {images.map((image, index) => (
              <div
                className={`product-carosel-image ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => handleImageChange(index)}
              ></div>
            ))}
          </div>
        </ImageSectionWrapper>
      )}
    </>
  )
}

export default ImageSection
