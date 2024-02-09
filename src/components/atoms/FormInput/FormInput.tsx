import { FieldErrors, Path, UseFormRegister } from "react-hook-form"
import { StyledFormInput, ErrorMessage } from "./FormInput.styled"
import { pages } from "../../../assets/local.json"

interface IFormInputs {
  name: string
  email: string
  message: string
}

type InputProps = {
  inputType: string
  placeholder?: string
  labelText: string
  id: string
  name: Path<IFormInputs>
  required?: boolean
  value?: React.HTMLInputTypeAttribute
  register: UseFormRegister<IFormInputs>
  errors: FieldErrors<IFormInputs>
}

const FormInput = ({
  inputType,
  placeholder,
  labelText,
  name,
  id,
  value,
  required = false,
  register,
  errors,
}: InputProps) => {
  return (
    <>
      {labelText && (
        <label htmlFor={id}>
          {labelText} <span className="required">*</span>
        </label>
      )}
      {inputType === "textarea" ? (
        <textarea
          {...register(name, { required: pages.requiredMessage })}
          name={name}
          placeholder={placeholder}
          id={id}
          rows={5}
          required={required}
        ></textarea>
      ) : (
        <StyledFormInput
          {...register(name, { required: pages.requiredMessage })}
          type={inputType}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          autoComplete="on"
          required={required}
        />
      )}
      {errors[name] && (
        <ErrorMessage className="error">{errors[name]!.message}</ErrorMessage>
      )}
    </>
  )
}

export default FormInput
