import { StyledLink } from "./Link.styled"

type LinkPropTypes = {
  path: string
  linkText: string
}

const Link = ({ path, linkText }: LinkPropTypes) => {
  return (
    <StyledLink
      to={path}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {linkText}
    </StyledLink>
  )
}

export default Link
