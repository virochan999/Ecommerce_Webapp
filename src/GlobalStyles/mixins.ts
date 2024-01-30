import { css } from "styled-components"

export const flexBox = css`
  display: flex;
`

export const centerFlex = css`
  ${flexBox}
  align-items: center;
  justify-content: center;
`

export const flexWithDirection = (direction: string) => css`
  ${flexBox}
  flex-direction: ${direction};
`

export const centerFlexWithDirection = (direction: string) => css`
  ${centerFlex}
  ${flexWithDirection(direction)}
`
