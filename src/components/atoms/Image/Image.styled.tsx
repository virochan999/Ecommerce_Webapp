import styled from "styled-components"

type ImageProps = {
  $rounded?: boolean
}

export const ImageElement = styled.img<ImageProps>`
  object-fit: contain;
  aspect-ratio: 2/2;
  border-radius: ${(props) => (props.$rounded ? "1rem" : "0rem")};
`
