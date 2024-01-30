import { Button } from "../Button/Button"
import { ConfirmationModalWrapper } from "./ConfirmationModal.styled"

type ConfirmationModalPropTypes = {
  onConfirm: () => void
  onClose: () => void
}

const ConfirmationModal = ({
  onConfirm,
  onClose,
}: ConfirmationModalPropTypes) => {
  return (
    <ConfirmationModalWrapper>
      <p>Are you sure to remove this product from cart</p>
      <div className="btns-wrapper">
        <Button
          label="Yes"
          onClick={onConfirm}
          primary
        />
        <Button
          label="No"
          onClick={onClose}
          primary
        />
      </div>
    </ConfirmationModalWrapper>
  )
}

export default ConfirmationModal
