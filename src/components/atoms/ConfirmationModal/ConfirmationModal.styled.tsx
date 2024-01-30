import styled from "styled-components"
import { colors } from "../../../GlobalStyles/variables"
import {
  centerFlexWithDirection,
  flexWithDirection,
} from "../../../GlobalStyles/mixins"

export const ConfirmationModalWrapper = styled.div`
  ${flexWithDirection("column")}
  gap: 1rem;

  p {
    color: ${colors.MEDIUM_RED};
    font-weight: 700;
  }

  & .btns-wrapper {
    ${centerFlexWithDirection("center")}
    gap: 1rem;
  }
`
