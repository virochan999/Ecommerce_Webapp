import { Link } from "react-router-dom"
import { FooterLinksWrapper, FooterWrapper } from "./Footer.styled"

type FooterLinkTypes = {
  links: LinkType[]
  target?: string
}

type LinkType = {
  name: string
  path: string
}

const FooterLinks = ({ links, target }: FooterLinkTypes) => {
  return (
    <FooterLinksWrapper className="footer__links">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          target={target}
        >
          {link.name}
        </Link>
      ))}
    </FooterLinksWrapper>
  )
}

const Footer = () => {
  const footerLinks = {
    routeLinks: [
      {
        name: "home",
        path: "/",
      },
      {
        name: "about",
        path: "about",
      },
      {
        name: "contact",
        path: "contact",
      },
    ],
    socialLinks: [
      {
        name: "facebook",
        path: "https://www.facebook.com",
      },
      {
        name: "instagram",
        path: "https://www.instagram.com",
      },
      {
        name: "linkedin",
        path: "https://www.linkedin.com",
      },
      {
        name: "twitter",
        path: "https://www.twitter.com",
      },
    ],
  }
  return (
    <FooterWrapper>
      <FooterLinks links={footerLinks.routeLinks} />
      <FooterLinks
        links={footerLinks.socialLinks}
        target="_blank"
      />
    </FooterWrapper>
  )
}

export default Footer
