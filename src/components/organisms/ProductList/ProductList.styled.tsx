import styled from "styled-components"
import { centerFlex } from "../../../GlobalStyles/mixins"

export const ProductListWrapper = styled.div`
  width: 80%;
  padding: 1rem;
  background-color: ${(props) => props.theme.mainBackground};
  box-shadow: ${(props) => props.theme.boxShadowTernary} 0px 0px 10px 0px inset;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & .category-product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    flex-grow: 1;
  }

  & .not-found-text {
    ${centerFlex}
    font-weight: 700;
  }
`
