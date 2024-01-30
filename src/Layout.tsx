import { lazy } from "react"
import { Outlet, useLocation, useRoutes } from "react-router-dom"
import Header from "./components/organisms/Header/Header"
import Footer from "./components/organisms/Footer/Footer"
import CategoryLinks from "./components/molecules/CategoryLinks/CategoryLinks"
const Home = lazy(() => import("./pages/Home/Home"))
const Category = lazy(() => import("./pages/Category/Category"))

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "category/:category",
    element: <Category />,
  },
]

const Layout = () => {
  const location = useLocation()
  const shouldRender = useRoutes(routes, location)

  return (
    <>
      <Header />
      {shouldRender && <CategoryLinks />}
      <main className="main-section">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
