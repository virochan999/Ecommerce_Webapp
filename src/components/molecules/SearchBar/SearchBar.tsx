import { SearchWrapper } from "./SearchBar.styled"
import Input from "../../atoms/Input/Input"
import { Button } from "../../atoms/Button/Button"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()
  const handleSearchProduct = () => {
    if (searchInput.trim() === "") return
    navigate(`result/${searchInput}`)
    setSearchInput("")
  }

  return (
    <SearchWrapper>
      <Input
        inputType="search"
        id="search"
        name="search"
        placeholder="Search product..."
        value={searchInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
      />
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
