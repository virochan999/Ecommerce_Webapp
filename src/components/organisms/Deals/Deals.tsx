import { useSelector } from "react-redux"
import Products from "../Products/Products"
import { RootState } from "../../../store/store"
import SectionSkeleton from "../../molecules/SectionSkeleton/SectionSkeleton"

const Deals = () => {
  const dealsData = useSelector((state: RootState) => state.products.deals)

  if (dealsData.loading) return <SectionSkeleton />

  return <Products homeData={dealsData} />
}

export default Deals
