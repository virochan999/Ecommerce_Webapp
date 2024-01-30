import { HeadingWrapper } from "./Heading.styled"

export type HeadingPropTypes = {
  /**
   * Heading levels
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  /**
   * Heading Text
   */
  headingText: string
  /**
   * Heading Font Size
   */
  size: "extraSmall" | "small" | "medium" | "large"
  className?: string
}

const Heading = ({
  headingLevel = "h1",
  headingText,
  size,
}: HeadingPropTypes) => {
  return (
    <HeadingWrapper
      as={headingLevel}
      size={size}
      className={`heading-${size}`}
    >
      {headingText}
    </HeadingWrapper>
  )
}

export default Heading
