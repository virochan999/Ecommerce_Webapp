import styled from "styled-components"

export const DialogWrapper = styled.dialog`
  opacity: 0;
  transform: scaleY(0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 1rem;
  position: fixed;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out,
    overlay 0.5s ease-out allow-discrete, display 0.5s ease-out allow-discrete;

  &[open] {
    opacity: 1;
    transform: scaleY(1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
  }
  @starting-style {
    &[open] {
      opacity: 0;
      transform: scaleY(0);
    }
  }

  &::backdrop {
    background-color: rgb(0 0 0 / 0);
    transition: display 0.5s allow-discrete, overlay 0.5s allow-discrete,
      background-color 0.5s;
  }

  &[open]::backdrop {
    background-color: rgb(0 0 0 / 0.5);
  }

  @starting-style {
    &[open]::backdrop {
      background-color: rgb(0 0 0 / 0);
    }
  }
`
