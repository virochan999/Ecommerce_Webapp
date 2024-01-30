import styled from "styled-components"

const primaryBackgroundColor = (props) => props.theme.primaryBackground

export const SectionSkeletonWrapper = styled.div`
  padding: 1rem;
  background-color: ${primaryBackgroundColor};
  border-radius: 0.5rem;

  & .section-header {
    height: 2rem;
    background-color: #adb5bd;
    animation: scale 2s infinite;
    border-radius: 0.2rem;
  }

  & .section-body {
    width: 100%;
    display: grid;
    margin-top: 1rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @keyframes scale {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.7;
    }
  }
`
