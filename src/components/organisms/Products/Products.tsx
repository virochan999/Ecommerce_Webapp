import { ProductsWrapper, SectionWrapper } from "./Products.styled"
import { HomePageData, ProductDataTypes } from "../../../types/types"
import ProductCard from "../../molecules/ProductCard/ProductCard"
import Heading from "../../atoms/Heading/Heading"
import { Link } from "react-router-dom"
import { pages } from "../../../assets/local.json"

interface ProductsPropTypes {
  homeData: {
    data: HomePageData[]
    error: null | string
    loading: boolean
  }
  routeLink?: string
}

const Products = ({ homeData, routeLink }: ProductsPropTypes) => {
  return (
    <>
      {homeData.data &&
        homeData.data.length !== 0 &&
        homeData.data.map((product: HomePageData) => (
          <SectionWrapper key={product._id}>
            <div className="section-header">
              <Heading
                headingText={product.name}
                size="medium"
                headingLevel="h2"
              />
              {routeLink && (
                <Link to={`category/${product.category}`}>
                  {pages.seeAllText}
                </Link>
              )}
            </div>
            <ProductsWrapper>
              {product.products.map((productData: ProductDataTypes) => (
                <ProductCard
                  key={productData._id}
                  product={productData}
                />
              ))}
            </ProductsWrapper>
          </SectionWrapper>
        ))}
    </>
  )
}

export default Products
