import React, { forwardRef } from "react"
import { InputBox } from "./Input.styled"

type InputProps = {
  inputType: string
  placeholder?: string
  id: string
  labelText?: string
  name: string
  className?: string
  autocomplete?: string
  required?: boolean
  value?: React.HTMLInputTypeAttribute
  ref?: React.RefObject<HTMLInputElement | null>
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement | null, InputProps>(
  (
    {
      inputType,
      placeholder,
      id,
      labelText,
      name,
      value,
      required = false,
      defaultChecked,
      className,
      autocomplete = "on",
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
    }: InputProps,
    ref
  ) => {
    return (
      <>
        <InputBox
          type={inputType}
          id={id}
          name={name}
          value={value}
          ref={ref}
          className={`input-${inputType} ${className ? className : ""}`}
          placeholder={placeholder}
          defaultChecked={defaultChecked}
          onChange={onChange}
          autoComplete={autocomplete}
          required={required}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {labelText && <label htmlFor={id}>{labelText}</label>}
      </>
    )
  }
)

export default Input
