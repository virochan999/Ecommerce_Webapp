import styled from "styled-components"
import { colors } from "../../../GlobalStyles/variables"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & .pagination-pages-wrapper {
    list-style: none;
    display: flex;
    gap: 0.2rem;

    & .pagination-pages {
      padding: 0.2rem 0.5rem;
      cursor: pointer;
      background-color: grey;
      border-radius: 0.3rem;

      &.active {
        background-color: ${colors.MEDIUM_BLUE};
        font-weight: bolder;
      }
    }
  }
`
