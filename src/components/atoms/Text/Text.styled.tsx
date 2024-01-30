import styled from "styled-components"
import { font } from "../../../GlobalStyles/FontVariables"
type TextStyleProps = {
  fontSize: string
  fontWeight?: string
}
export const TextWrapper = styled.p<TextStyleProps>`
  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return font.FONT_XS
      case "medium":
        return font.FONT_MD
      case "large":
        return font.FONT_LG
      default:
        return "1rem"
    }
  }};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`
