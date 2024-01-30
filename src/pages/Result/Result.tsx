import { useParams } from "react-router-dom"
import Heading from "../../components/atoms/Heading/Heading"
import { ResultWrapper } from "./Result.styled"
import Text from "../../components/atoms/Text/Text"
import { useEffect, useState } from "react"
import useDataFetch from "../../hooks/useDataFetch"
import { ProductDataTypes } from "../../types/types"
import ProductCard from "../../components/molecules/ProductCard/ProductCard"
import Skeleton from "../../components/molecules/Skeleton/Skeleton"
import CardSkeleton from "../../components/molecules/CardSkeleton/CardSkeleton"

const Result = () => {
  const [searchedProducts, setSearchedProducts] = useState<ProductDataTypes[]>(
    []
  )
  const { searchedQuery } = useParams()
  const { loading, fetchData } = useDataFetch()

  useEffect(() => {
    fetchData({
      apiEndpoint: `products/filter/title?title=${searchedQuery}`,
      onSuccess(data) {
        setSearchedProducts(data)
      },
    })
  }, [searchedQuery])

  return (
    <ResultWrapper>
      <div className="result-header">
        <Heading
          headingText="Search results for the keyword:"
          size="medium"
          headingLevel="h2"
        />
        <Text
          fontSize="medium"
          textContent={searchedQuery ? searchedQuery : ""}
          fontWeight="500"
        />
      </div>

      <div className="result-products">
        {loading ? (
          <Skeleton
            count={4}
            children={<CardSkeleton />}
          />
        ) : searchedProducts.length === 0 ? (
          <Text
            textContent="No Product Found"
            fontSize="medium"
            fontWeight="700"
            className="product-message"
          />
        ) : (
          searchedProducts.map((product) => (
            <ProductCard
              product={product}
              key={product._id}
            />
          ))
        )}
      </div>
    </ResultWrapper>
  )
}

export default Result
