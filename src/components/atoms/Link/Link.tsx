import { StyledLink } from "./Link.styled"

type LinkPropTypes = {
  path: string
  linkText: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Link = ({ path, linkText, onClick }: LinkPropTypes) => {
  return (
    <StyledLink
      to={path}
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={onClick}
    >
      {linkText}
    </StyledLink>
  )
}

export default Link
