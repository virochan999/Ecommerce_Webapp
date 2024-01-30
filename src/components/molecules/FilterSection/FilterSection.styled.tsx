import styled from "styled-components"

export const FilterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .filter-container {
    & h3 {
      text-transform: capitalize;
      margin-bottom: 0.3rem;
    }

    & .filter-box {
      display: flex;
      gap: 0.5em;
      align-items: center;

      & label {
        cursor: pointer;
      }
    }
  }
`
