import styled from "styled-components"
import { colors, skeleton } from "../../../GlobalStyles/variables"

type SkeletonTypes = {
  size?: string
}

export const SkeletonFieldWrapper = styled.div<SkeletonTypes>`
  width: 100%;
  border-radius: 0.3rem;
  background: ${colors.SKELETON_BG};

  height: ${(props) => {
    switch (props.size) {
      case "small":
        return skeleton.HEIGHT_XS
      case "medium":
        return skeleton.HEIGHT_MD
      case "large":
        return skeleton.HEIGHT_LG
      default:
        return "1rem"
    }
  }};
`
