import { Link } from "react-router-dom"
import { CategoryLinksWrapper } from "./CategoryLinks.styled"
import linkData from "../../../assets/data.json"

const CategoryLinks = () => {
  return (
    <CategoryLinksWrapper>
      {linkData.categoryLinks.map((link, index) => (
        <Link
          key={index}
          to={`category/${link.to}`}
        >
          {link.name}
        </Link>
      ))}
    </CategoryLinksWrapper>
  )
}

export default CategoryLinks
