import styled from "styled-components"
import { colors } from "../../../GlobalStyles/variables"
import { fontWeight } from "../../../GlobalStyles/FontVariables"

export const StyledFormInput = styled.input``

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -1.2rem;
  color: ${colors.MEDIUM_RED};
  font-size: 0.8rem;
  font-weight: ${fontWeight.FONT_MEDIUM};
`
