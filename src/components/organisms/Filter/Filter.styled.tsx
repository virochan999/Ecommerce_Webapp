import styled from "styled-components"

export const FilterWrapper = styled.div`
  width: 20%;
  padding: 1rem;
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadowTernary} 0px 5px 10px 0px inset;

  & .filter-wrapper {
    position: sticky;
    top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
