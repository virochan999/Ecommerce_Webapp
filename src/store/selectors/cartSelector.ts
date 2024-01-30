import { createSelector } from "@reduxjs/toolkit"
import { CartDataTypes } from "../../types/types"
import { RootState } from "../store"

export const selectCartProductIndex = createSelector(
  (state) => state,
  (_state: RootState, id: number) => id,
  (cart, _id) => {
    return cart.cartData.findIndex((item: CartDataTypes) => item._id === _id)
  }
)
