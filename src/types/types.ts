export type ProductDataTypes = {
  _id: number
  title: string
  price: string
  images: string[]
  description: string
  category: { name: string }
}

export type CategoryTypes = {
  name: string
  id: number
}

export type FilterValueType = {
  name: string
  values: string[]
}

export type HomePageData = {
  name: string
  _id: string
  category: string
  products: ProductDataTypes[]
}

export type CartDataTypes = ProductDataTypes & { quantity: number }
