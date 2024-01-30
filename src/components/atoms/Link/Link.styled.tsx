import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
  transition: all 0.1s linear;
  &:hover,
  &.active {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.secondary};
  }
`
