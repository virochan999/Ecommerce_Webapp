import styled from "styled-components"

export const ProductDetailsWrapper = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  & .back-button {
    margin: 1rem 0;
  }

  & .product-details__section {
    display: flex;
  }

  & .loading {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
