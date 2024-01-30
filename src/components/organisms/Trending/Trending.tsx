import { useSelector } from "react-redux"
import Products from "../Products/Products"
import { RootState } from "../../../store/store"
import SectionSkeleton from "../../molecules/SectionSkeleton/SectionSkeleton"

const Trending = () => {
  const trendingData = useSelector(
    (state: RootState) => state.products.trending
  )

  if (trendingData.loading) return <SectionSkeleton />

  return (
    <Products
      homeData={trendingData}
      routeLink="See All"
    />
  )
}

export default Trending
