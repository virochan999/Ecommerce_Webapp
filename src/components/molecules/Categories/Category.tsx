import { CategoryTypes } from "../../../types/types"
import { CategoryWrapper } from "./Category.styled"

type CategoryPropTypes = {
  category: CategoryTypes
  filterByCategory: (id: number) => void
}

const Category = ({ category, filterByCategory }: CategoryPropTypes) => {
  const handleClick = (id: number) => {
    filterByCategory(id)
  }

  return (
    <CategoryWrapper onClick={() => handleClick(category.id)}>
      {category.name}
    </CategoryWrapper>
  )
}

export default Category
