import { ThemeTogglerWrapper } from "./ThemeToggler.styled"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../../store/reducers/themeSlice.ts"
import { RootState } from "../../../store/store.ts"
import DarkThemeImg from "../../../assets/dark.svg"
import LightThemeImg from "../../../assets/light.svg"
import Image from "../Image/Image.tsx"

const ThemeToggler = () => {
  const dispatch = useDispatch()

  const currentTheme = useSelector((state: RootState) => state.theme.theme)

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <ThemeTogglerWrapper>
      <Image
        imageSource={currentTheme === "dark" ? DarkThemeImg : LightThemeImg}
        altText="Theme icon"
        onClick={handleTheme}
      />
    </ThemeTogglerWrapper>
  )
}

export default ThemeToggler
