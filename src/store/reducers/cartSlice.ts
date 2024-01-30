import { createSlice } from "@reduxjs/toolkit"
import { CartDataTypes } from "../../types/types"
import { selectCartProductIndex } from "../selectors/cartSelector"
import { toast } from "react-toastify"

type CartTypes = {
  cartData: CartDataTypes[]
  loading: boolean
  cartLength: number
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartData: [], loading: false, cartLength: 0 } as CartTypes,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.cartData.findIndex(
        (item) => item._id === action.payload._id
      )
      if (existingProductIndex !== -1) {
        if (state.cartData[existingProductIndex].quantity < 10) {
          state.cartData[existingProductIndex].quantity++
        } else {
          toast.warning("Maximum quantity reached for this product")
          return
        }
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 })
      }
      state.loading = false
      state.cartLength = state.cartData.length
      toast.success("Product successfully added to cart")
    },

    removeFromCart: (state, action) => {
      const productIndex = state.cartData.findIndex(
        (item) => item._id === action.payload
      )
      if (productIndex !== -1) {
        state.cartData.splice(productIndex, 1)
      }
      state.cartLength = state.cartData.length
      toast.success("Product removed successfully from cart")
    },

    increaseCartItem: (state, action) => {
      const productIndex = selectCartProductIndex(state, action.payload)
      if (productIndex !== -1) {
        if (state.cartData[productIndex].quantity < 10) {
          state.cartData[productIndex].quantity++
        } else {
          toast.warning("Maximum quantity reached for this product")
        }
      }
    },

    decreaseCartItem: (state, action) => {
      const productIndex = selectCartProductIndex(state, action.payload)

      if (productIndex !== -1) {
        if (state.cartData[productIndex].quantity > 1) {
          state.cartData[productIndex].quantity--
        } else {
          state.cartData.splice(productIndex, 1)
          toast.warning("Minimum quantity reached. Product removed")
        }
      }
      state.cartLength = state.cartData.length
    },

    cartFetchStart: (state) => {
      state.loading = true
    },

    cartItemCount: (state) => {
      state.cartLength = state.cartData.length
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  cartFetchStart,
  cartItemCount,
  increaseCartItem,
  decreaseCartItem,
} = cartSlice.actions

export default cartSlice.reducer
