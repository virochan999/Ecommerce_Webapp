import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react"
import { CategoryWrapper } from "./Category.styled"
import Filter from "../../components/organisms/Filter/Filter"
import ProductList from "../../components/organisms/ProductList/ProductList"
import useDataFetch from "../../hooks/useDataFetch"
import {
  fetchedProducts,
  productsFetchStart,
  paginationData,
} from "../../store/reducers/productSlice"
import {
  fetchBrandsStart,
  fetchedBrands,
} from "../../store/reducers/filterSlice"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../../store/store"

const Category = () => {
  const dispatch = useDispatch()
  const { category } = useParams()
  const navigate = useNavigate()
  const [currentFilters, setCurrentFilters] = useState<
    Record<string, string[]>
  >({})

  const paginationValues = useSelector(
    (state: RootState) => state.products.pagination
  )

  const { error, fetchData } = useDataFetch()

  /* Function to handle pagination data */
  const fetchDataPagination = useCallback(
    (page: number) => {
      handleParmasDataFetch(currentFilters, page)
    },
    [paginationValues]
  )

  useEffect(() => {
    dispatch(fetchBrandsStart())
    fetchData({
      apiEndpoint: `filters/${category}`,
      // Set brands data to store on successful fetch
      onSuccess: (brandsData) => {
        dispatch(fetchedBrands(brandsData))
      },
    })
  }, [category])

  /* Function to handle filter based data fetch */
  const handleParmasDataFetch = (
    filters: Record<string, string[]>,
    page = 1
  ) => {
    const urlParams = new URLSearchParams(window.location.search)
    setCurrentFilters(filters)
    for (const [filterName, values] of Object.entries(filters)) {
      if (values.length > 0) {
        urlParams.set(filterName, values.join(","))
      } else {
        urlParams.delete(filterName)
      }
    }

    urlParams.set("offset", ((page - 1) * 9).toString())
    urlParams.set("limit", "9")

    navigate({
      pathname: `/category/${category}`,
      search: urlParams.toString(),
    })

    dispatch(productsFetchStart())
    let params
    if (urlParams.size > 0) {
      params = `products/${category}/filter?${urlParams.toString()}`
    } else {
      params = `products/${category}/filter`
    }
    fetchData({
      apiEndpoint: `${params}`,
      // Set products and pagination to store on successful fetch
      onSuccess: (data) => {
        dispatch(fetchedProducts(data.products))
        dispatch(paginationData(data.pagination))
      },
    })
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <CategoryWrapper>
      <div className="category-main-section">
        <Filter
          category={category}
          handleParmasDataFetch={handleParmasDataFetch}
        />
        <ProductList
          currentPage={paginationValues.currentPage}
          totalPages={paginationValues.totalPages}
          fetchDataPagination={fetchDataPagination}
        />
      </div>
    </CategoryWrapper>
  )
}

export default Category
