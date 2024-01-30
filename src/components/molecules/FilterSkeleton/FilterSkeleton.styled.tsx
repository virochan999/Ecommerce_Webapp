import styled from "styled-components"
import { scaleAnimation } from "../../../GlobalStyles/GlobalStyles.styled"
import { colors } from "../../../GlobalStyles/variables"

export const FilterSkeletonWrapper = styled.div`
  padding: 1rem 1rem 1rem 0.5rem;
  animation: ${scaleAnimation} 2s infinite;
  display: flex;
  flex-direction: column;
  background: #6c757d;
  gap: 1rem;
  border-radius: 0.3rem;

  & .filter-header {
    height: 1rem;
    background: ${colors.SKELETON_BG};
    border-radius: 0.3rem;
  }

  & .filter-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
