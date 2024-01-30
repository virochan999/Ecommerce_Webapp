import Heading from "../../atoms/Heading/Heading"
import Input from "../../atoms/Input/Input"
import { FilterSectionWrapper } from "../../molecules/FilterSection/FilterSection.styled"

type Filter = {
  name: string
  values: string[]
}

type FilterSectionPropTypes = {
  filter: Filter[]
  category: string
  checkedFilters: Record<string, string[]>
  handleCheckboxChange: (name: string, value: string) => void
}

const FilterSection = ({
  filter,
  checkedFilters,
  handleCheckboxChange,
}: FilterSectionPropTypes) => {
  return (
    <FilterSectionWrapper>
      {filter.map((filter, index) => (
        <div
          key={index}
          className="filter-container"
        >
          <Heading
            headingText={filter.name}
            size="small"
            headingLevel="h3"
          />
          {filter.values.map((value) => (
            <div
              key={value}
              className="filter-box"
            >
              <Input
                inputType="checkbox"
                labelText={value}
                name="filter"
                id={value}
                defaultChecked={checkedFilters[filter.name]?.includes(value)}
                onChange={() => handleCheckboxChange(filter.name, value)}
              />
            </div>
          ))}
        </div>
      ))}
    </FilterSectionWrapper>
  )
}

export default FilterSection
