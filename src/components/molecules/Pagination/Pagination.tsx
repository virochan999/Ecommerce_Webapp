import { Button } from "../../atoms/Button/Button"
import { PaginationWrapper } from "./Pagination.styled"
import { label } from "../../../assets/local.json"

type PaginationPropTypes = {
  handleNext: (page: number) => void
  handlePrev: (page: number) => void
  currentPage: number
  totalPages: number
}

const Pagination = ({
  handleNext,
  handlePrev,
  currentPage,
  totalPages,
}: PaginationPropTypes) => {
  /* Function to navigate to the next page. */
  const navigateToNextPage = () => {
    handleNext(currentPage + 1)
  }

  /* Function to navigate to the previous page. */
  const navigateToPrevPage = () => {
    handlePrev(currentPage - 1)
  }

  return (
    <PaginationWrapper>
      <Button
        label={label.previous}
        onClick={navigateToPrevPage}
        disabled={currentPage === 1}
        primary
      />
      <ul className="pagination-pages-wrapper">
        {/* {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <li
              className={`pagination-pages ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              {index + 1}
            </li>
          ))} */}
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </ul>
      <Button
        label={label.next}
        onClick={navigateToNextPage}
        disabled={currentPage === totalPages}
        primary
      />
    </PaginationWrapper>
  )
}

export default Pagination
