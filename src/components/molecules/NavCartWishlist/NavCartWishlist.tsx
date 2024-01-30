import { NavCartWishlistWrapper } from "./NavCartWishlist.styled"
import CartImg from "../../../assets/cart.svg"
import WishList from "../../../assets/wishlist.svg"
import { Link } from "react-router-dom"
import Image from "../../atoms/Image/Image"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"

const NavCartWishlist = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cartLength)
  const wishListCount = 0

  const NavCartWishlist = [
    {
      name: "cart",
      image: CartImg,
      count: cartCount,
    },
    {
      name: "wishlist",
      image: WishList,
      count: wishListCount,
    },
  ]

  return (
    <NavCartWishlistWrapper>
      {NavCartWishlist.map((item) => (
        <Link
          to={item.name}
          key={item.name}
        >
          <div className="link-items">
            <Image
              imageSource={item.image}
              altText={`${item.name} icon`}
            />
            <span className="link-text">{item.count}</span>
          </div>
        </Link>
      ))}
    </NavCartWishlistWrapper>
  )
}

export default NavCartWishlist
