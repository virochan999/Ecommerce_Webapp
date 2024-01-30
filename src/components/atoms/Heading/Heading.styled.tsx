import styled from "styled-components"
import { HeadingPropTypes } from "./Heading"

export const HeadingWrapper = styled.h1<Pick<HeadingPropTypes, "size">>`
  font-size: ${(props) => {
    switch (props.size) {
      case "extraSmall":
        return "0.8rem"
      case "small":
        return "1rem"
      case "medium":
        return "1.5rem"
      case "large":
        return "2rem"
      default:
        return "1.5rem"
    }
  }};
`
