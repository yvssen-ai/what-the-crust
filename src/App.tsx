import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SignaturePizzas } from './components/SignaturePizzas'
import { PizzaBuilder } from './components/PizzaBuilder'
import { Story } from './components/Story'
import { OrderCTA } from './components/OrderCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignaturePizzas />
        <PizzaBuilder />
        <Story />
        <OrderCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
