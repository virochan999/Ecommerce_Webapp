import styled from "styled-components"

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 2rem;

  & p {
    font-weight: 700;
  }

  & {
    a {
      background-color: ${(props) => props.theme.backgroundPrimary};
    }
  }
`
