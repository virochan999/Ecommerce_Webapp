import styled from "styled-components"

export const CartDetailsWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .message-text {
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    margin-top: 3rem;
  }

  & .cart-product {
    display: flex;
    padding: 1rem;
    box-shadow: 8px 6px 10px 10px ${(props) => props.theme.cardShadow};
    border-radius: 1rem;

    &__image {
      width: 30%;

      img {
        width: 70%;
        height: 12rem;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__btns {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    &__action-btns {
      display: flex;
      gap: 1rem;
    }
  }
`
