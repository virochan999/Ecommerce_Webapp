import { createSlice } from "@reduxjs/toolkit"

interface FilterTypes {
  data: {
    category: string
    filters: Filter[]
  }
  loading: boolean
}

interface Filter {
  name: string
  values: string[]
}

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    data: {},
    loading: false,
  } as FilterTypes,
  reducers: {
    fetchedBrands: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    fetchBrandsStart: (state) => {
      state.loading = true
    },
  },
})

export const { fetchedBrands, fetchBrandsStart } = filterSlice.actions

export default filterSlice.reducer
