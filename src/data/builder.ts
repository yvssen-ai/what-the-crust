export type Size = {
  id: string
  label: string
  cm: number
  price: number
}

export type Topping = {
  id: string
  name: string
  price: number
  icon: string
}

export const sizes: Size[] = [
  { id: 'piccola', label: 'Piccola', cm: 26, price: 12 },
  { id: 'media', label: 'Media', cm: 30, price: 15 },
  { id: 'grande', label: 'Grande', cm: 34, price: 18 },
]

export const toppings: Topping[] = [
  { id: 'pepperoni', name: 'Pepperoni', price: 2, icon: '🍕' },
  { id: 'burrata', name: 'Burrata', price: 3, icon: '🧀' },
  { id: 'mushroom', name: 'Wild Mushroom', price: 2, icon: '🍄' },
  { id: 'nduja', name: "Nduja", price: 3, icon: '🌶️' },
  { id: 'rocket', name: 'Rocket & Parmesan', price: 2, icon: '🌿' },
  { id: 'chilli-honey', name: 'Chilli Honey', price: 1, icon: '🍯' },
  { id: 'olives', name: 'Olives', price: 1, icon: '🫒' },
  { id: 'truffle', name: 'Black Truffle', price: 4, icon: '🍂' },
]
