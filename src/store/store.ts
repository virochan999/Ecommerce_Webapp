import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./reducers/themeSlice.ts"
import categorySlice from "./reducers/categorySlice.ts"
import rootReducer from "./reducers/productSlice.ts"
import filterSlice from "./reducers/filterSlice.ts"
import cartSlice from "./reducers/cartSlice.ts"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: rootReducer,
    categories: categorySlice,
    filters: filterSlice,
    cart: cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatc = typeof store.dispatch

export default store
