import { NavHeaderWrapper } from "./NavHeader.styled"
import Image from "../../atoms/Image/Image"
import Logo from "../../../assets/ecom-logo.png"
import Heading from "../../atoms/Heading/Heading"
import { useNavigate } from "react-router-dom"

const NavHeader = () => {
  const navigate = useNavigate()
  return (
    <NavHeaderWrapper onClick={() => navigate("/")}>
      <Image
        imageSource={Logo}
        altText="Ecommerce logo"
      />
      <Heading
        headingLevel="h1"
        headingText="Ecommerce"
        size="medium"
        className="medium"
      />
    </NavHeaderWrapper>
  )
}

export default NavHeader
