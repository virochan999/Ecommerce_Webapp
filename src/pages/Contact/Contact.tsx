import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../components/atoms/Button/Button"
import Heading from "../../components/atoms/Heading/Heading"
import { ContactWrapper } from "./Contact.styled"
import FormInput from "../../components/atoms/FormInput/FormInput"
import { contactForm } from "../../assets/local.json"
import { toast } from "react-toastify"

type FormFields = {
  name: string
  email: string
  message: string
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({})

  const formSubmit: SubmitHandler<FormFields> = (formData) => {
    console.log("formData", formData)
    reset(defaultValues)
    toast.success("Successfully sent the message!")
  }

  return (
    <ContactWrapper>
      <form
        className="contact-form"
        onSubmit={handleSubmit(formSubmit)}
      >
        <Heading
          headingText={contactForm.heading}
          size="medium"
          headingLevel="h2"
        />
        <div className="contact-form__input">
          <FormInput
            register={register}
            labelText={contactForm.label.name}
            placeholder={contactForm.placeholder.name}
            id="name"
            name="name"
            inputType="text"
            required={true}
            errors={errors}
          />
        </div>
        <div className="contact-form__input">
          <FormInput
            register={register}
            placeholder={contactForm.placeholder.email}
            labelText={contactForm.label.email}
            id="email"
            name="email"
            inputType="email"
            required={true}
            errors={errors}
          />
        </div>
        <div className="contact-form__input">
          <FormInput
            register={register}
            placeholder={contactForm.placeholder.description}
            labelText={contactForm.label.description}
            id="message"
            required={true}
            name="message"
            inputType="textarea"
            errors={errors}
          />
        </div>

        <div className="btn-wrapper">
          <Button
            label="Submit"
            buttonType="submit"
            primary
            onClick={handleSubmit(formSubmit)}
          />
          <Button
            label="Reset"
            onClick={() => reset(defaultValues)}
            primary
          />
        </div>
      </form>
    </ContactWrapper>
  )
}

export default Contact
