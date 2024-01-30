import { HeaderWrapper } from "./Header.styled"
import NavLinks from "../../molecules/NavLinks/NavLinks"
import NavHeader from "../../molecules/NavHeader/NavHeader"
import SearchBar from "../../molecules/SearchBar/SearchBar"
import Theme from "../../molecules/Theme/Theme"
import NavCartWishlist from "../../molecules/NavCartWishlist/NavCartWishlist"

const Header = () => {
  return (
    <HeaderWrapper>
      <NavHeader />
      <NavLinks />
      <SearchBar />
      <NavCartWishlist />
      <Theme />
    </HeaderWrapper>
  )
}

export default Header
