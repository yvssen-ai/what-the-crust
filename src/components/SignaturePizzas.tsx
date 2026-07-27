import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from './Reveal'
import { alsoOnMenu, signaturePizzas } from '../data/menu'
import margherita from '../assets/images/whatthecrust3.jpg'
import fullCrust from '../assets/images/menu-loaded.jpg'
import pepperoni from '../assets/images/hero-oven.jpg'

const images: Record<string, string> = {
  'margherita-reale': margherita,
  'full-crust': fullCrust,
  'pepperoni-cloud': pepperoni,
}

export function SignaturePizzas() {
  return (
    <section id="menu" className="relative bg-crust-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crust-red-light">
            // 01 — Menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-crust-cream sm:text-5xl">
            Signature Pizzas
          </h2>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {signaturePizzas.map((pizza) => (
            <motion.article
              key={pizza.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-3xl bg-crust-charcoal shadow-lg shadow-black/30"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={images[pizza.id]}
                  alt={pizza.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crust-charcoal via-transparent to-transparent" />
                {pizza.tag && (
                  <span className="absolute right-4 top-4 rounded-full bg-crust-red px-3 py-1 font-display text-xs font-semibold text-crust-cream shadow-md">
                    {pizza.tag}
                  </span>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-crust-cream">{pizza.name}</h3>
                  <span className="whitespace-nowrap font-display text-lg font-semibold text-crust-red-light">
                    ${pizza.price}
                  </span>
                </div>
                <p className="mt-2 font-body text-sm text-crust-cream/60">{pizza.description}</p>
                <button
                  type="button"
                  className="mt-5 w-full rounded-full bg-crust-red/10 py-2.5 font-display text-sm font-semibold text-crust-red-light ring-1 ring-crust-red/40 transition-colors group-hover:bg-crust-red group-hover:text-crust-cream"
                >
                  Order
                </button>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-12 sm:mt-16">
          <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-crust-cream/50">
            Also on the menu
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {alsoOnMenu.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-crust-cream/10 px-4 py-3.5"
              >
                <div>
                  <p className="font-display text-sm font-semibold text-crust-cream">{item.name}</p>
                  <p className="mt-0.5 font-body text-xs text-crust-cream/50">{item.description}</p>
                </div>
                <span className="whitespace-nowrap font-display text-sm font-semibold text-crust-red-light">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
