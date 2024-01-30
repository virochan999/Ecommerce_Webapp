import { SkeletonFieldWrapper } from "./SkeletonField.styled"

type SkeletonFieldPropTypes = {
  size?: "small" | "medium" | "large"
}

const SkeletonField = ({ size }: SkeletonFieldPropTypes) => {
  return <SkeletonFieldWrapper size={size}></SkeletonFieldWrapper>
}

export default SkeletonField
