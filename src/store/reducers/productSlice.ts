import { combineReducers, createSlice } from "@reduxjs/toolkit"
import { HomePageData, ProductDataTypes } from "../../types/types"

interface CategoryProductsState {
  data: HomePageData[]
  loading: boolean
  error: null | string
}

interface PaginationTypes {
  totolProducts: number
  totalPages: number
  currentPage: number
}

const initialState: CategoryProductsState = {
  data: [],
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [] as ProductDataTypes[],
    pagination: {} as PaginationTypes,
    loading: false,
    error: null,
  },
  reducers: {
    // Set the products data to the state
    fetchedProducts: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },

    // Set the pagination data to the state
    fetchedPaginationData: (state, action) => {
      state.pagination = action.payload
    },

    // Set the loading and error state on on api call
    productsFetchStart: (state) => {
      state.loading = true
      state.error = null
    },

    // Set the loading and error state after api call
    productsFetchFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    totalPages: 0,
    currentPage: 1,
    totolProducts: 0,
  } as PaginationTypes,
  reducers: {
    // Set the Pagination data to the state
    paginationData: (state, action) => {
      state.totalPages = action.payload.totalPages
      state.currentPage = action.payload.currentPage
      state.totolProducts = action.payload.totolProducts
    },

    // Set the current page to the state
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage
    },
  },
})

const dealsSlice = createSlice({
  name: "deals",
  initialState,
  reducers: {
    fetchDealsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchDealsStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchDealsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const trendingSlice = createSlice({
  name: "trending",
  initialState: { data: [], loading: false, error: null },
  reducers: {
    fetchTrendingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchTrendingStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchTrendingFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

const rootReducer = combineReducers({
  products: productSlice.reducer,
  pagination: paginationSlice.reducer,
  deals: dealsSlice.reducer,
  trending: trendingSlice.reducer,
})

export const {
  fetchedProducts,
  fetchedPaginationData,
  productsFetchStart,
  productsFetchFailure,
} = productSlice.actions

export const { paginationData } = paginationSlice.actions

export const { fetchDealsStart, fetchDealsSuccess, fetchDealsFailure } =
  dealsSlice.actions

export const {
  fetchTrendingStart,
  fetchTrendingSuccess,
  fetchTrendingFailure,
} = trendingSlice.actions

export default rootReducer
