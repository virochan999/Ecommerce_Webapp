import Link from "../../atoms/Link/Link"
import navLinkData from "../../../assets/data.json"
import { NvalinksWrapper } from "./NavLinks.styled"

type Navlink = {
  name: string
  path: string
}

const NavLinks = () => {
  return (
    <NvalinksWrapper>
      {navLinkData.navlinks.map((navLink: Navlink) => (
        <Link
          key={navLink.name}
          path={navLink.path}
          linkText={navLink.name}
        />
      ))}
    </NvalinksWrapper>
  )
}

export default NavLinks
