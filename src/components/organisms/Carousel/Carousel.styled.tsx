import styled from "styled-components"

export const MainWrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  background-image: linear-gradient(
    135deg,
    ${(props) => props.theme.gradientPrimary} 10%,
    ${(props) => props.theme.gradientSecondary} 50%,
    ${(props) => props.theme.gradientTernary} 100%
  );
  display: flex;
  justify-content: end;
`

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  transition: left 0.5s ease-in-out;

  & .text-section {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  & .carousel-desc {
    padding: 1rem;
    background-color: ${(props) => props.theme.background};
    opacity: 0.3;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(255, 255, 255, 0.8) 0px 6px 6px;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  & .carousel-section {
    display: flex;
    gap: 1rem;
    width: 70%;
    justify-content: space-between;
    padding: 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 30%;
`
