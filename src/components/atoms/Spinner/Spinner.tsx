import { SpinnerWrapper } from "./Spinner.styled"

const Spinner = ({ primary }: { primary?: boolean }) => {
  return (
    <SpinnerWrapper className={primary ? "primary" : "secondary"}>
      <div className="spinner"></div>
    </SpinnerWrapper>
  )
}

export default Spinner
