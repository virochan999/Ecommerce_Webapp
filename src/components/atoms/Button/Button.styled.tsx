import styled from "styled-components"
import { colors } from "../../../GlobalStyles/variables"

type ButtonProps = {
  $backgroundColor?: string
}

export const ButtonWrapper = styled.button<ButtonProps>`
  /* Primary button styles */
  transition: background-color 0.3s;
  &.storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }

  /* Secondary button styles */
  &.storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  /* Size variations */
  &.storybook-button--small {
    font-size: 12px;
    padding: 8px 12px;
  }

  &.storybook-button--medium {
    font-size: 14px;
    padding: 9px 14px;
  }

  &.storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
  &.navigation {
    background-color: ${(props) => props.theme.navigation};
    color: ${(props) => props.theme.text};
    font-size: 0.8rem;
    height: fit-content;

    &:hover {
      background-color: #555;
    }
  }
  &.action {
    background-color: ${(props) => props.$backgroundColor};
    &:hover {
      background-color: ${colors.MERCURY_COLOR};
    }
  }

  &.back-btn {
    padding: 0.3rem 0.8rem;
    background-color: #caf0f8;
  }

  &.disabled {
    background-color: ${colors.DISABLED_BG};
    color: ${colors.TEXT_GREY};
    cursor: not-allowed;
  }
`
