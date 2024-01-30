import { useDispatch, useSelector } from "react-redux"
import { cart } from "../../../assets/local.json"
import { CartDetailsWrapper } from "./CartDetails.styled"
import { RootState } from "../../../store/store"
import Image from "../../atoms/Image/Image"
import Heading from "../../atoms/Heading/Heading"
import { Button } from "../../atoms/Button/Button"
import Text from "../../atoms/Text/Text"
import { useState, useEffect } from "react"
import {
  decreaseCartItem,
  increaseCartItem,
  removeFromCart,
} from "../../../store/reducers/cartSlice"
import DialogModal from "../../molecules/DialogModal/DialogModal"
import ConfirmationModal from "../../atoms/ConfirmationModal/ConfirmationModal"

const CartDetails = ({
  setTotalPrice,
}: {
  setTotalPrice: (price: number) => void
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartData)
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()

  /* Calculate the total price. */
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (sum, cartItem) => sum + Number(cartItem.price) * cartItem.quantity,
      0
    )
    setTotalPrice(totalPrice)
  }, [cartItems])

  /* Function to open and handle the modal behavior. */
  const handleModal = () => {
    setModal(true)
  }

  /* Handle the increase of count for a cart item. */
  const handleCountIncrease = (id: number) => {
    dispatch(increaseCartItem(id))
  }

  /* Handle the decrease of count for a cart item. */
  const handleCountDecrease = (id: number) => {
    dispatch(decreaseCartItem(id))
  }

  /* Function to remove an item from the cart. */
  const handleProductRemove = (id: number) => {
    dispatch(removeFromCart(id))
    setModal(false)
  }

  return (
    <CartDetailsWrapper>
      {cartItems.length === 0 ? (
        <Text
          textContent={cart.emptyMessage}
          fontSize="medium"
          className="message-text"
          fontWeight="900"
        />
      ) : (
        cartItems.map((cartItem) => (
          <div
            className="cart-product"
            key={cartItem._id}
          >
            <div className="cart-product__image">
              <Image
                imageSource={cartItem.images[0]}
                altText="product image"
              />
            </div>
            <div className="cart-product__details">
              <Heading
                headingText={cartItem.title}
                size="small"
                headingLevel="h3"
              />
              <div className="cart-product__btns">
                <Button
                  label="-"
                  buttonType="action"
                  backgroundColor="#edf2f4"
                  onClick={() => handleCountDecrease(cartItem._id)}
                />
                <span>{cartItem.quantity}</span>

                <Button
                  label="+"
                  buttonType="action"
                  backgroundColor="#edf2f4"
                  onClick={() => handleCountIncrease(cartItem._id)}
                />
              </div>
              <Text
                textContent={`${cart.label.price}: $${cartItem.price}`}
                fontSize="small"
                fontWeight="bold"
              />
              <Text
                textContent={`${cart.label.totalPrice}: $${
                  Number(cartItem.price) * cartItem.quantity
                }`}
                fontSize="small"
              />
              <div className="cart-product__action-btns">
                <Button
                  label={cart.label.orderLabel}
                  buttonType="action"
                  backgroundColor="#edf2f4"
                />
                <Button
                  label={cart.label.removeText}
                  buttonType="action"
                  backgroundColor="#edf2f4"
                  onClick={handleModal}
                />
                <DialogModal
                  openModal={modal}
                  closeModal={() => setModal(false)}
                >
                  <ConfirmationModal
                    onConfirm={() => handleProductRemove(cartItem._id)}
                    onClose={() => setModal(false)}
                  />
                </DialogModal>
              </div>
            </div>
          </div>
        ))
      )}
    </CartDetailsWrapper>
  )
}

export default CartDetails
