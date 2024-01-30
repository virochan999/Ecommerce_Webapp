import { ProductDescriptionWrapper } from "./ProductDescription.styled"
import { ProductDataTypes } from "../../../types/types"
import Heading from "../../atoms/Heading/Heading"
import Text from "../../atoms/Text/Text"
import { Button } from "../../atoms/Button/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../store/reducers/cartSlice"

type ProductDescriptionPropTypes = {
  productDetails?: ProductDataTypes
}

const ProductDescription = ({
  productDetails,
}: ProductDescriptionPropTypes) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails))
  }

  const handleAddToWishlist = () => {}

  return (
    <ProductDescriptionWrapper>
      {productDetails && (
        <div className="description-section">
          <Heading
            headingText={productDetails?.title}
            size="medium"
            headingLevel="h3"
          />
          <div className="description-section__details">
            <Heading
              headingText="Description :"
              size="small"
              headingLevel="h4"
            />
            <p>{productDetails.description}</p>
            <Text
              textContent={`$ ${productDetails.price}`}
              fontSize="small"
              fontWeight="900"
            />
          </div>
          <div className="action-btns">
            <Button
              label="Add to cart"
              buttonType="action"
              backgroundColor="#edf2f4"
              onClick={handleAddToCart}
            />
            <Button
              label="Add to wishlist"
              buttonType="action"
              backgroundColor="#edf2f4"
              onClick={handleAddToWishlist}
            />
          </div>
        </div>
      )}
    </ProductDescriptionWrapper>
  )
}

export default ProductDescription
