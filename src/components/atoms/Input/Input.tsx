import { InputBox } from "./Input.styled"

type InputProps = {
  inputType: string
  placeholder?: string
  id: string
  labelText?: string
  name: string
  className?: string
  required?: boolean
  value?: React.HTMLInputTypeAttribute
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  inputType,
  placeholder,
  id,
  labelText,
  name,
  value,
  required = false,
  defaultChecked,
  className,
  onChange,
}: InputProps) => {
  return (
    <>
      <InputBox
        type={inputType}
        id={id}
        name={name}
        value={value}
        className={`input-${inputType} ${className ? className : ""}`}
        placeholder={placeholder}
        defaultChecked={defaultChecked}
        onChange={onChange}
        autoComplete="on"
        required={required}
      />
      {labelText && <label htmlFor={id}>{labelText}</label>}
    </>
  )
}

export default Input
