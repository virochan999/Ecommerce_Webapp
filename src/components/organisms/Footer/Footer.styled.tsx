import styled from "styled-components"

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.primary};
  box-shadow: rgba(0, 0, 0, 0.35) 5px 0px 25px;
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  gap: 0.2rem;

  & a {
    font-size: small;

    &:hover {
      text-decoration: underline;
    }
  }
`
