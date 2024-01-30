import { useSelector } from "react-redux"
import { pages } from "../../../assets/local.json"
import { ProductListWrapper } from "./ProductList.styled"
import { RootState } from "../../../store/store"
import ProductCard from "../../molecules/ProductCard/ProductCard"
import { ProductDataTypes } from "../../../types/types"
import Skeleton from "../../molecules/Skeleton/Skeleton"
import CardSkeleton from "../../molecules/CardSkeleton/CardSkeleton"
import Pagination from "../../molecules/Pagination/Pagination"

type ProductListPropTypes = {
  currentPage: number
  totalPages: number
  fetchDataPagination: (page: number) => void
}

const ProductList = ({
  currentPage,
  totalPages,
  fetchDataPagination,
}: ProductListPropTypes) => {
  const products = useSelector((state: RootState) => state.products.products)

  /* Function to handle the next page action */
  const handleNext = () => {
    const nextPage = currentPage + 1
    fetchDataPagination(nextPage)
  }

  /* Function to handle the previous page action */
  const handlePrev = () => {
    const prevPage = currentPage - 1
    fetchDataPagination(prevPage)
  }

  /* Renders the products by mapping through the data and creating ProductCard components for each product */
  const renderProducts = () => {
    return products && products.data && products.data.length > 0 ? (
      products.data.map((product: ProductDataTypes) => (
        <ProductCard
          product={product}
          key={product._id}
        />
      ))
    ) : (
      <p className="not-found-text">{pages.ProductNotFound}</p>
    )
  }

  /* Renders the pagination component based on the products data and current page */
  const renderPagination = () => {
    return (
      products &&
      products.data &&
      products.data.length > 0 && (
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )
    )
  }

  return (
    <ProductListWrapper>
      <div className="category-product-list">
        {products.loading ? (
          <Skeleton
            count={6}
            children={<CardSkeleton />}
          />
        ) : (
          renderProducts()
        )}
      </div>
      {renderPagination()}
    </ProductListWrapper>
  )
}

export default ProductList
