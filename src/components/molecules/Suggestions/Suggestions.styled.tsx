import styled from "styled-components"
import { font } from "../../../GlobalStyles/FontVariables"

export const SuggestionsWrappper = styled.div`
  position: absolute;
  top: 110%;
  background-color: ${(props) => props.theme.backgroundPrimary};
  width: 100%;
  border-radius: 0.1rem;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  backdrop-filter: blur(500px);
  p {
    padding: 0.5rem;
  }

  & .suggestion-product {
    a {
      display: block;
      width: 100%;
      font-size: ${font.FONT_SM};
    }
  }
`
