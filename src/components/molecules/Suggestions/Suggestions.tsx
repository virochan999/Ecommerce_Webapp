import { forwardRef } from "react"
import { ProductDataTypes } from "../../../types/types"
import Link from "../../atoms/Link/Link"
import { SuggestionsWrappper } from "./Suggestions.styled"

type SuggestionsPropTypes = {
  searchedProducts: ProductDataTypes[]
  handleReset: () => void
  handleResetSuggestions: () => void
  loading: boolean
  ref: React.RefObject<HTMLDivElement | null>
}
const Suggestions = forwardRef<HTMLDivElement | null, SuggestionsPropTypes>(
  ({ searchedProducts, handleReset, loading }: SuggestionsPropTypes, ref) => {
    return (
      <SuggestionsWrappper ref={ref}>
        {loading ? (
          <p>loading...</p>
        ) : (
          searchedProducts.map((product) => (
            <div
              key={product._id}
              className="suggestion-product"
            >
              <Link
                path={`result/${product.title}`}
                linkText={product.title}
                onClick={handleReset}
              />
            </div>
          ))
        )}
      </SuggestionsWrappper>
    )
  }
)

export default Suggestions
