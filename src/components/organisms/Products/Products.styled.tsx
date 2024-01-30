import styled from "styled-components"

export const ProductsWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const SectionWrapper = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.ternary};
  border-radius: 0.5rem;

  & .section-header {
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;

    & h2 {
      text-transform: uppercase;
    }

    & a {
      color: #00bbf9;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
