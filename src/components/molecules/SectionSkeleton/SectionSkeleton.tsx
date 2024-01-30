import CardSkeleton from "../CardSkeleton/CardSkeleton"
import Skeleton from "../Skeleton/Skeleton"
import { SectionSkeletonWrapper } from "./SectionSkeleton.styled"

const SectionSkeleton = () => {
  return (
    <SectionSkeletonWrapper>
      <div className="section-header"></div>
      <div className="section-body">
        <Skeleton
          count={4}
          children={<CardSkeleton />}
        />
      </div>
    </SectionSkeletonWrapper>
  )
}

export default SectionSkeleton
