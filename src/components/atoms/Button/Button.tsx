import { MouseEvent, ReactNode } from "react"
import { ButtonWrapper } from "./Button.styled"

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void

  buttonType?: string

  loading?: boolean

  disabled?: boolean

  children?: ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  buttonType,
  children,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary"
  return (
    <ButtonWrapper
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        disabled && "disabled",
        buttonType,
      ].join(" ")}
      $backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <>loading...</>
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </ButtonWrapper>
  )
}
