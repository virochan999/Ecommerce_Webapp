import { createSlice } from "@reduxjs/toolkit"

type ThemeTypes = {
  theme: "dark" | "light"
}

const initialState: ThemeTypes = {
  theme: "dark",
}

const storedTheme = localStorage.getItem("theme")

if (storedTheme) {
  initialState.theme = storedTheme as ThemeTypes["theme"]
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      return {
        ...state,
        theme: newTheme,
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
