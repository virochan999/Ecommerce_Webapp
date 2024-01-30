import { useState } from "react"
import Heading from "../../components/atoms/Heading/Heading"
import Text from "../../components/atoms/Text/Text"
import CartDetails from "../../components/organisms/CartDetails/CartDetails"
import { CartWrapper } from "./Cart.styled"

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number | null>(null)

  return (
    <CartWrapper>
      <div className="cart-header">
        <Heading
          headingText="Cart Items :"
          size="medium"
          headingLevel="h2"
        />
        <Text
          textContent={`Total Price: ${totalPrice}`}
          fontSize="small"
          fontWeight="700"
        />
      </div>
      <CartDetails setTotalPrice={setTotalPrice} />
    </CartWrapper>
  )
}

export default Cart
