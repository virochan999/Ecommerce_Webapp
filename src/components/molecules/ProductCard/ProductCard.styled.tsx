import styled from "styled-components"

export const ProductCardWrapper = styled.div`
  padding: 1rem;
  background-color: ${(prop) => prop.theme.backgroundPrimary};
  box-shadow: 2px 2px 0px hsla(0, 0%, 0%, 0.14),
    0px 3px 1px -2px hsla(0, 0%, 0%, 0.12), 0px 1px 5px 0px hsla(0, 0%, 0%, 0.2);
  border-radius: 0.3rem;
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  cursor: pointer;
  height: 100%;

  & .product-title {
    font-size: small;
  }
`

export const CardImage = styled.div``

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 0.3rem;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CardButtons = styled.div`
  display: flex;
  gap: 0.2rem;
  width: 100%;
  justify-content: space-around;
  margin-top: 1rem;
`
