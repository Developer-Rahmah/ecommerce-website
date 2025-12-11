import type { RelatedProduct as APIRelatedProduct } from "@/src/services/api/productService"

export interface RelatedProduct {
  id: number
  image: string
  title: string
  price: number
  badge?: string
}

export interface RelatedProductsProps {
  products?: APIRelatedProduct[]
}
