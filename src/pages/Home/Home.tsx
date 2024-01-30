import { useDispatch } from "react-redux"
import { useEffect } from "react"
import Carousel from "../../components/organisms/Carousel/Carousel"
import useDataFetch from "../../hooks/useDataFetch"
import { ProductWrapper } from "./Home.styled"
import {
  fetchDealsStart,
  fetchDealsSuccess,
  fetchTrendingStart,
  fetchTrendingSuccess,
} from "../../store/reducers/productSlice"
import Deals from "../../components/organisms/Deals/Deals"
import Trending from "../../components/organisms/Trending/Trending"
import { apiUrl } from "../../api/apiUrl"

const Home = () => {
  const dispatch = useDispatch()

  const { error, fetchData } = useDataFetch()

  useEffect(() => {
    dispatch(fetchDealsStart())
    fetchData({
      apiEndpoint: apiUrl.home_deals,
      onSuccess: (data) => {
        dispatch(fetchDealsSuccess(data))
      },
    })

    dispatch(fetchTrendingStart())
    fetchData({
      apiEndpoint: apiUrl.home_trending,
      onSuccess: (data) => {
        dispatch(fetchTrendingSuccess(data))
      },
    })
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Carousel />
      <ProductWrapper>
        <Deals />
        <Trending />
      </ProductWrapper>
    </>
  )
}

export default Home
