import { TextWrapper } from "./Text.styled"

type TextPropTypes = {
  textContent: string | number
  fontSize: string
  fontWeight?: string
  tagName?: string
  className?: string
}

const Text = ({
  textContent,
  fontSize,
  fontWeight,
  tagName,
  className,
}: TextPropTypes) => {
  return (
    <TextWrapper
      fontSize={fontSize}
      fontWeight={fontWeight}
      as={tagName}
      className={className}
    >
      {textContent}
    </TextWrapper>
  )
}

export default Text
