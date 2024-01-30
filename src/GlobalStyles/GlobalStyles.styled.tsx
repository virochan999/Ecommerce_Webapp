import { createGlobalStyle } from "styled-components"
import { colors } from "./variables"
import { keyframes } from "styled-components"
import { flexWithDirection } from "./mixins"

export const scaleAnimation = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.7;
  }
`

export const GLobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${(props) => props.theme.text};
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.mainBackground};
  }

  .main-section {
    flex-grow: 1;
    ${flexWithDirection("column")}
  }

  button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0.4rem;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }

  input[type="checkbox"] {
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    width: 1rem;
    height: 1rem;
    background-color: ${colors.CHECKBOX_BG};
    border: 2px solid ${colors.CHECKBOX_BORDER};
    border-radius: 0.2rem;
    outline: none;
    cursor: pointer;
  }

  input[type="checkbox"]::after {
    content: "";
    display: block;
    position: absolute;
    left: 25%;
    top: 0;
    width: 0.25rem;
    height: 0.5rem;
    border: solid white;
    border-width: 0 0.15rem 0.15rem 0;
    border-radius: 0.1rem;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  input[type="checkbox"]:checked::after {
    opacity: 1;
    transform: rotate(45deg) scale(1.2);
  }
`
