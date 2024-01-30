import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    fetchedCategories: (_, action) => {
      return action.payload
    },
  },
})

export const { fetchedCategories } = categorySlice.actions

export default categorySlice.reducer
