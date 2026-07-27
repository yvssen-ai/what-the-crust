export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  tag?: string
  image?: string
}

export const signaturePizzas: MenuItem[] = [
  {
    id: 'margherita-reale',
    name: 'Margherita Reale',
    description: 'San Marzano tomato, fior di latte, torn basil, pesto',
    price: 14,
  },
  {
    id: 'full-crust',
    name: 'The Full Crust',
    description: 'Pepperoni, ham, mushroom, peppers, red onion',
    price: 19,
    tag: 'Best Seller',
  },
  {
    id: 'pepperoni-cloud',
    name: 'Pepperoni Cloud',
    description: 'Double pepperoni, hot honey, whipped mozzarella',
    price: 17,
    tag: 'Chef Pick',
  },
]

export const alsoOnMenu: MenuItem[] = [
  {
    id: 'nduja-nights',
    name: 'Nduja Nights',
    description: 'Spicy nduja, red onion, chilli honey, parmesan',
    price: 18,
  },
  {
    id: 'truffle-shuffle',
    name: 'Truffle Shuffle',
    description: 'Black truffle cream, wild mushroom, burrata',
    price: 22,
  },
  {
    id: 'garden-party',
    name: 'Garden Party',
    description: 'Courgette, peppers, olives, rocket, vegan mozz',
    price: 16,
  },
]

export const stats = [
  { value: 450, suffix: '°C', label: 'Stone oven heat' },
  { value: 90, suffix: 's', label: 'Fire to table' },
  { value: 24, suffix: 'h', label: 'Slow-proofed dough' },
  { value: 3, suffix: '', label: 'Ingredients per pie, minimum fuss' },
]
