import styled, { keyframes } from "styled-components"

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.primary {
    height: 100vh;
    background-color: ${(props) => props.theme.backgroundPrimary};
  }

  &.secondary {
    flex-grow: 1;
  }

  .spinner {
    display: inline-block;
    width: 5rem;
    height: 5rem;

    &:after {
      content: " ";
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #fff;
      border-color: ${(props) => props.theme.text} transparent
        ${(props) => props.theme.text} transparent;
      animation: ${spinnerAnimation} 1.2s linear infinite;
    }
  }
`
