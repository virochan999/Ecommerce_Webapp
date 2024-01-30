import { useEffect, useRef, useState } from "react"
import { pages } from "../../../assets/local.json"
import Image from "../../atoms/Image/Image"
import NextImg from "../../../assets/next.svg"
import PrevImg from "../../../assets/prev.svg"
import { ButtonWrapper, CarouselWrapper, MainWrapper } from "./Carousel.styled"
import CarouselImages from "../../../assets/carouselImages.json"
import { Button } from "../../atoms/Button/Button"
import Text from "../../atoms/Text/Text"
import CarouselSlide from "../../molecules/CarouselSlide/CarouselSlide"
import { useNavigate } from "react-router-dom"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRef = useRef<null | HTMLDivElement>(null)
  const navigate = useNavigate()
  const scrollWidth = 250
  const scrollPages = 3
  const intervalTime = 3000

  /* Funtion to handle prev button for carousel */
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CarouselImages.images.length - 1 : prevIndex - 1
    )
    if (activeIndex === 0) {
      imageRef.current!.scrollLeft = scrollWidth * scrollPages
    } else {
      imageRef.current!.scrollLeft -= scrollWidth
    }
  }

  /* Funtion to handle next button for carousel */
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === CarouselImages.images.length - 1 ? 0 : prevIndex + 1
    )
    if (activeIndex === CarouselImages.images.length - 1) {
      imageRef.current!.scrollLeft = 0
    } else {
      imageRef.current!.scrollLeft += scrollWidth
    }
  }

  /* Funtion to navigate to product detail page on click */
  const handleCarouselImageClick = (category: string, id: string) => {
    navigate(`/product/${category}/${id}`)
  }

  /* Automatic slide of carousel */
  useEffect(() => {
    const slideInterval = setInterval(handleNext, intervalTime)
    return () => clearInterval(slideInterval)
  }, [activeIndex])

  return (
    <MainWrapper>
      <CarouselWrapper>
        <ButtonWrapper>
          <Button
            onClick={handlePrev}
            buttonType="navigation prev"
            size="small"
          >
            <Image
              imageSource={PrevImg}
              altText="prev icon"
            />
          </Button>
          <Button
            onClick={handleNext}
            buttonType="navigation next"
            size="small"
          >
            <Image
              imageSource={NextImg}
              altText="next icon"
            />
          </Button>
        </ButtonWrapper>

        <div className="carousel-section">
          <div className="text-section">
            <Text
              textContent={pages.carouselDiscountMsg}
              fontSize="medium"
            />
            <div
              className="carousel-desc"
              onClick={() =>
                handleCarouselImageClick(
                  CarouselImages.images[activeIndex].category,
                  CarouselImages.images[activeIndex].id
                )
              }
            >
              <Text
                textContent={CarouselImages.images[activeIndex].title}
                fontSize="large"
              />
              <Text
                textContent={`Discounted price: ${CarouselImages.images[activeIndex].discountPercentage}`}
                fontSize="medium"
              />
            </div>
          </div>
          <CarouselSlide
            images={CarouselImages.images}
            imageRef={imageRef}
            handleCarouselImageClick={handleCarouselImageClick}
          />
        </div>
      </CarouselWrapper>
    </MainWrapper>
  )
}

export default Carousel
