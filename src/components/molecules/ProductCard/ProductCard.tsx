import {
  CardButtons,
  CardImage,
  DetailsWrapper,
  ProductCardWrapper,
  TextWrapper,
} from "./ProductCard.styled"
import { card } from "../../../assets/local.json"
import { ProductDataTypes } from "../../../types/types"
import Image from "../../atoms/Image/Image"
import Text from "../../atoms/Text/Text"
import Heading from "../../atoms/Heading/Heading"
import { Button } from "../../atoms/Button/Button"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../../../store/reducers/cartSlice"
import { MouseEvent, useState } from "react"

type ProductCardTypes = {
  product: ProductDataTypes
}

const ProductCard = ({ product }: ProductCardTypes) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  const handleAddToCart = (e?: MouseEvent<HTMLButtonElement>) => {
    e!.stopPropagation()
    setIsButtonLoading(true)
    dispatch(addToCart(product))
    setIsButtonLoading(false)
  }

  const addToWishList = () => {}

  const handleProductDetails = (id: number) => {
    navigate(`/product/${product.category}/${id}`)
  }

  return (
    <ProductCardWrapper onClick={() => handleProductDetails(product._id)}>
      <CardImage>
        <Image
          imageSource={product.images[0]}
          altText={product.title}
          imageWidth={200}
          imageHeight={200}
          rounded={true}
        />
      </CardImage>

      <h3
        title={product.title}
        className="product-title"
      >
        {product.title}
      </h3>
      <DetailsWrapper>
        <TextWrapper>
          <Heading
            headingText={card.price}
            size="extraSmall"
            headingLevel="h4"
          />
          <Text
            textContent={`$ ${product.price}`}
            fontSize="small"
            fontWeight="500"
          />
        </TextWrapper>
        <TextWrapper>
          <Heading
            headingText={card.category}
            size="extraSmall"
            headingLevel="h4"
          />
          <Text
            textContent={`${product.category}`}
            fontSize="small"
            fontWeight="500"
          />
        </TextWrapper>
      </DetailsWrapper>
      <CardButtons>
        <Button
          label={card.addLabel}
          backgroundColor="#edf2f4"
          buttonType="action"
          onClick={handleAddToCart}
          loading={isButtonLoading}
        />
        <Button
          label="+ Add to wishlist"
          backgroundColor="#edf2f4"
          buttonType="action"
          onClick={addToWishList}
        />
      </CardButtons>
    </ProductCardWrapper>
  )
}

export default ProductCard
