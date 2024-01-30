import SkeletonField from "../../atoms/SkeletonField/SkeletonField"
import { FilterSkeletonWrapper } from "./FilterSkeleton.styled"

const FilterSkeleton = () => {
  return (
    <FilterSkeletonWrapper>
      <header className="filter-header"></header>
      <div className="filter-body">
        <SkeletonField size="small" />
        <SkeletonField size="small" />
        <SkeletonField size="small" />
        <SkeletonField size="small" />
      </div>
    </FilterSkeletonWrapper>
  )
}

export default FilterSkeleton
