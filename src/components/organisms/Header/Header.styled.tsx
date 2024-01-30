import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
