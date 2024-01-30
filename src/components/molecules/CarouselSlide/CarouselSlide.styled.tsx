import styled from "styled-components"

type BackGroundDivProps = {
  $backgroundimg: string
}

export const CarouselSlideWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 25em;
  height: 25em;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 0.5rem;
  cursor: pointer;
`

export const BackgroundImageWrapper = styled.div<BackGroundDivProps>`
  background-image: url(${(props) => props.$backgroundimg});
  min-width: 25em;
  height: 100%;
  scroll-snap-align: start;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s ease-in-out;
`
