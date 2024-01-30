import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import React, { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"
import { GLobalStyles } from "./GlobalStyles/GlobalStyles.styled"
import { RootState } from "./store/store.ts"
import { darkTheme, lightTheme } from "./Themes/themes.ts"
import Layout from "./Layout"
import Spinner from "./components/atoms/Spinner/Spinner.tsx"
import ProductDetails from "./views/ProductDetails/ProductDetails.tsx"
import { Slide, ToastContainer } from "react-toastify"
const Home = React.lazy(() => import("./pages/Home/Home"))
const Cart = React.lazy(() => import("./pages/Cart/Cart.tsx"))
const Category = React.lazy(() => import("./pages/Category/Category.tsx"))
const Result = React.lazy(() => import("./pages/Result/Result.tsx"))
const About = React.lazy(() => import("./pages/About/About.tsx"))
const Contact = React.lazy(() => import("./pages/Contact/Contact.tsx"))
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound.tsx"))

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
      {
        path: "product/:category/:id",
        element: <ProductDetails />,
      },
      {
        path: "result/:searchedQuery",
        element: <Result />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  const theme = useSelector((state: RootState) =>
    state.theme.theme === "dark" ? darkTheme : lightTheme
  )
  const currentTheme = useSelector((state: RootState) => state.theme.theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GLobalStyles />
        <Suspense fallback={<Spinner primary />}>
          <RouterProvider router={router} />
        </Suspense>
        <ToastContainer
          autoClose={1000}
          theme={currentTheme}
          transition={Slide}
        />
      </ThemeProvider>
    </>
  )
}

export default App
