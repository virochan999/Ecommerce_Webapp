import styled from "styled-components"

export const ProductDescriptionWrapper = styled.div`
  flex-basis: 50%;
  padding: 1rem;
  box-shadow: 2px 2px 5px 6px rgba(0, 0, 0, 0.1);

  & .description-section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    &__details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    & .action-btns {
      display: flex;
      gap: 1rem;

      & .cart-btns {
        display: flex;
        gap: 1rem;
      }
    }
  }
`
