import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { FilterWrapper } from "./Filter.styled"
import Heading from "../../atoms/Heading/Heading"
import FilterSection from "../../molecules/FilterSection/FilterSection"
import FilterSkeleton from "../../molecules/FilterSkeleton/FilterSkeleton"
import Skeleton from "../../molecules/Skeleton/Skeleton"

type FilterPropTypes = {
  handleParmasDataFetch: (initialFilters: Record<string, string[]>) => void
  category?: string
}

const Filter = ({ category, handleParmasDataFetch }: FilterPropTypes) => {
  const filtersData = useSelector((state: RootState) => state.filters)
  const [checkedFilters, setCheckedFilters] = useState<
    Record<string, string[]>
  >({})

  /* Update initial filters on category change */
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const initialFilters: Record<string, string[]> = {}
    for (const [key, values] of urlParams.entries()) {
      initialFilters[key] = values.split(",")
    }
    setCheckedFilters(initialFilters)
    handleParmasDataFetch(initialFilters)
  }, [category])

  /* Handle filter change and update the filters accordingly */
  const handleCheckboxChange = (filterName: string, value: string) => {
    let updatedFilters: Record<string, string[]> = { ...checkedFilters }
    if (filterName === "price") {
      const matchResult = value.match(/\$([0-9]+)-\$([0-9]+)/)
      if (matchResult) {
        const [minPrice, maxPrice] = matchResult.slice(1)

        updatedFilters.price_min = checkedFilters.price_min?.includes(minPrice)
          ? checkedFilters.price_min.filter((v) => v !== minPrice)
          : [...(checkedFilters.price_min || []), minPrice]

        updatedFilters.price_max = checkedFilters.price_max?.includes(maxPrice)
          ? checkedFilters.price_max.filter((v) => v !== maxPrice)
          : [...(checkedFilters.price_max || []), maxPrice]

        setCheckedFilters(updatedFilters)
      }
    } else {
      updatedFilters = {
        ...checkedFilters,
        [filterName]: checkedFilters[filterName]?.includes(value)
          ? checkedFilters[filterName].filter((v) => v !== value)
          : [...(checkedFilters[filterName] || []), value],
      }
      setCheckedFilters(updatedFilters)
    }
    handleParmasDataFetch(updatedFilters)
  }

  return (
    <FilterWrapper>
      <div className="filter-wrapper">
        <Heading
          headingText="Filter By:"
          headingLevel="h3"
          size="small"
        />
        {filtersData.loading ? (
          <Skeleton
            count={2}
            children={<FilterSkeleton />}
          />
        ) : (
          <>
            {Object.keys(filtersData.data).length !== 0 && (
              <FilterSection
                filter={filtersData.data.filters}
                category={filtersData.data.category}
                checkedFilters={checkedFilters}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
          </>
        )}
      </div>
    </FilterWrapper>
  )
}

export default Filter
