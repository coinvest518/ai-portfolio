export interface Product {
  id: string
  title: string
  description: string
  imageSrc: string
  price: number
  buyButtonLink: string
  type: "Digital download" | "External link"
}
