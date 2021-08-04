export {}

export type TItem = {
  id: number
  title: string
  img: string
  count: number
  total: number
  price: number
  info: string
}

export type TItemActionHandler = (id: TItem['id']) => void
