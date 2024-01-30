import styled from "styled-components"

export const ImageSectionWrapper = styled.div`
  flex-basis: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & .product-image {
    width: 20rem;
    height: 20rem;
    background-position: center;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
  }

  & .product-carousel {
    display: flex;
    gap: 1rem;

    & .product-carosel-image {
      width: 5rem;
      height: 5rem;
      background-size: cover;
      cursor: pointer;
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.1);
      }

      &.active {
        outline: 2px solid #ffbe0b;
      }
    }
  }
`
