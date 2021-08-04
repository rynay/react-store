export {}

export type TItem = {
  id: number
  title: string
  img: string
  count: number
  total: number
  price: number
}

export type TItemActionHandler = (id: TItem['id']) => void
