import { SearchWrapper } from "./SearchBar.styled"
import Input from "../../atoms/Input/Input"
import { Button } from "../../atoms/Button/Button"
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Suggestions from "../Suggestions/Suggestions"
import useDataFetch from "../../../hooks/useDataFetch"
import { ProductDataTypes } from "../../../types/types"
import useDebounce from "../../../hooks/useDebounce"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef<HTMLInputElement | null>(null)
  const suggestionRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()
  const [searchedProducts, setSearchedProducts] = useState<ProductDataTypes[]>(
    []
  )
  const [loading, setLoading] = useState(false)
  const { fetchData, abortPreviousRequest } = useDataFetch()
  const delay = 300

  const handleSearchProduct = () => {
    if (searchInput.trim() === "") return
    navigate(`result/${searchInput}`)
    setSearchInput("")
    setShowSuggestions(false)
    setSearchedProducts([])
  }

  const handleSearchInput = useDebounce((searchedQuery: string) => {
    if (searchedQuery.trim() === "") {
      abortPreviousRequest()
      setSearchedProducts([])
      setLoading(false)
      return
    }
    setLoading(true)
    fetchData({
      apiEndpoint: `products/search?title=${searchedQuery}`,
      onSuccess(data) {
        setSearchedProducts(data)
        setLoading(false)
      },
    })
  }, delay)

  const handleReset = () => {
    handleResetSuggestions()
    setSearchInput("")
    setShowSuggestions(false)
  }

  const handleResetSuggestions = () => {
    setSearchedProducts([])
  }

  return (
    <SearchWrapper>
      <div className="search-wrapper">
        <Input
          inputType="search"
          id="search"
          name="search"
          ref={searchRef}
          placeholder="Search product..."
          value={searchInput}
          autocomplete="off"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value)
            handleSearchInput(e.target.value)
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleSearchProduct()
            }
          }}
          onFocus={() => {
            setShowSuggestions(true)
          }}
          onBlur={(event) => {
            if (!suggestionRef.current?.contains(event.relatedTarget)) {
              setShowSuggestions(false)
            }
          }}
        />
        {showSuggestions && (
          <Suggestions
            searchedProducts={searchedProducts}
            handleReset={handleReset}
            handleResetSuggestions={handleResetSuggestions}
            loading={loading}
            ref={suggestionRef}
          />
        )}
      </div>
      <Button
        label="Search"
        size="small"
        primary
        onClick={handleSearchProduct}
      />
    </SearchWrapper>
  )
}

export default SearchBar
