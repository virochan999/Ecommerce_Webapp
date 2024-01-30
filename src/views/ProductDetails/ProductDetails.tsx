import { useNavigate, useParams } from "react-router-dom"
import BackImg from "../../assets/back.svg"
import { ProductDetailsWrapper } from "./ProductDetails.styled"
import { useEffect, useState } from "react"
import { ProductDataTypes } from "../../types/types"
import useDataFetch from "../../hooks/useDataFetch"
import { Button } from "../../components/atoms/Button/Button"
import ImageSection from "../../components/organisms/ImageSection/ImageSection"
import ProductDescription from "../../components/organisms/ProductDescription/ProductDescription"
import Image from "../../components/atoms/Image/Image"
import Spinner from "../../components/atoms/Spinner/Spinner"

const ProductDetails = () => {
  const { id: productId, category } = useParams()
  const [productDetails, setProductDetails] = useState<ProductDataTypes | null>(
    null
  )
  const navigate = useNavigate()
  const { loading, fetchData } = useDataFetch()

  useEffect(() => {
    fetchData({
      apiEndpoint: `products/${category}/${productId}`,
      // Set Product data to store on successful fetch
      onSuccess(productDetails) {
        setProductDetails(productDetails)
      },
    })
  }, [productId, category])

  /* Funtion to handle back button */
  const handleBackBtn = () => {
    navigate(-1)
  }

  return (
    <ProductDetailsWrapper>
      <div className="back-button">
        <Button
          onClick={handleBackBtn}
          buttonType="back-btn"
        >
          <Image
            imageSource={BackImg}
            altText="Back icon"
          />
        </Button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        productDetails && (
          <div className="product-details__section">
            <ImageSection images={productDetails?.images} />
            <ProductDescription productDetails={productDetails} />
          </div>
        )
      )}
    </ProductDetailsWrapper>
  )
}

export default ProductDetails
