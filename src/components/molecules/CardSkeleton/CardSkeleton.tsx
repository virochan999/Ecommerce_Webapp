import SkeletonField from "../../atoms/SkeletonField/SkeletonField"
import { SkeletonLoaderWrapper } from "./CardSkeleton.styled"

const CardSkeleton = () => {
  return (
    <SkeletonLoaderWrapper>
      <div className="skeleton-avatar"></div>
      <SkeletonField size="medium" />
      <SkeletonField size="medium" />
      <SkeletonField size="medium" />
      <div className="skeleton-button-wrapper">
        <SkeletonField size="large" />
        <SkeletonField size="large" />
      </div>
    </SkeletonLoaderWrapper>
  )
}

export default CardSkeleton
