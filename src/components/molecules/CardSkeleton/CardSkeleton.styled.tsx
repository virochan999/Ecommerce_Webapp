import styled, { keyframes } from "styled-components"

const scaleAnimation = keyframes`
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.7;
  }
`

export const SkeletonLoaderWrapper = styled.div`
  margin-bottom: 2em;
  animation: ${scaleAnimation} 2s infinite;
  border-radius: 0.3rem;
  background: #6c757d;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(108, 117, 125, 0.2),
      transparent
    );
    z-index: 999;
  }

  .skeleton-avatar {
    background: #adb5bd;
    height: 200px;
    width: 200px;
    border-radius: 0.5rem;
  }

  .skeleton-button-wrapper {
    display: flex;
    width: 100%;
    gap: 0.5rem;
  }
`
