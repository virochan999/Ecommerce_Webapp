import { Fragment, ReactNode } from "react"

type SkeletonPropTypes = {
  count: number
  children: ReactNode
}

const Skeleton = ({ count, children }: SkeletonPropTypes) => {
  const skeletonCount = Array(count).fill(0)
  return (
    <>
      {skeletonCount.map((_, index) => (
        <Fragment key={index}>{children}</Fragment>
      ))}
    </>
  )
}

export default Skeleton
