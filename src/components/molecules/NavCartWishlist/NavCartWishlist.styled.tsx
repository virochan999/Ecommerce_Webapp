import styled from "styled-components"

export const NavCartWishlistWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    & .link-items {
      display: flex;
      align-items: center;
    }

    & .link-text {
      content: "";
      width: 1rem;
      height: 1rem;
      padding: 0.6rem;
      position: absolute;
      top: -40%;
      right: -50%;
      z-index: -10;
      border-radius: 100%;
      background-color: ${(props) => props.theme.text};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.primary};
    }
  }
`
