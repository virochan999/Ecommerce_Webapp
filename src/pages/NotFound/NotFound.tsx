import { NotFoundWrapper } from "./NotFound.styled"
import { pages } from "../../assets/local.json"
import Link from "../../components/atoms/Link/Link"

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <p>{pages.NotFoundPageMessage}</p>
      <Link
        path="/"
        linkText="Home"
      />
    </NotFoundWrapper>
  )
}

export default NotFound
