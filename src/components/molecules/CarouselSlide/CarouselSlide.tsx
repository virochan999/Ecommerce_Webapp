import { RefObject } from "react"
import {
  CarouselSlideWrapper,
  BackgroundImageWrapper,
} from "./CarouselSlide.styled"

type CarouselSlidePropTypes = {
  images: ImageTypes[]
  imageRef: RefObject<HTMLDivElement>
  handleCarouselImageClick: (category: string, id: string) => void
}

type ImageTypes = {
  id: string
  path: string
  category: string
}

const CarouselSlide = ({
  images,
  imageRef,
  handleCarouselImageClick,
}: CarouselSlidePropTypes) => {
  return (
    <CarouselSlideWrapper ref={imageRef}>
      {images.map((image: ImageTypes) => (
        <BackgroundImageWrapper
          key={image.id}
          $backgroundimg={image.path}
          onClick={() => handleCarouselImageClick(image.category, image.id)}
        />
      ))}
    </CarouselSlideWrapper>
  )
}

export default CarouselSlide
