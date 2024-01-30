import styled from "styled-components"

export const ResultWrapper = styled.div`
  padding: 1rem;

  & .result-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & .result-products {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    & .product-message {
      margin-top: 2rem;
      text-align: center;
    }
  }
`
