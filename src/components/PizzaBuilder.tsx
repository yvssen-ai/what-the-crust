import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { AnimatedPrice } from './AnimatedPrice'
import { sizes, toppings, type Topping } from '../data/builder'
import previewImage from '../assets/images/menu-loaded.jpg'

const sizeScale: Record<string, number> = { piccola: 0.82, media: 1, grande: 1.14 }

export function PizzaBuilder() {
  const [sizeId, setSizeId] = useState(sizes[1].id)
  const [selected, setSelected] = useState<string[]>(['pepperoni', 'burrata'])

  const size = sizes.find((s) => s.id === sizeId)!
  const chosenToppings = useMemo(
    () => toppings.filter((t) => selected.includes(t.id)),
    [selected],
  )
  const total = size.price + chosenToppings.reduce((sum, t) => sum + t.price, 0)

  const toggleTopping = (t: Topping) => {
    setSelected((prev) => (prev.includes(t.id) ? prev.filter((id) => id !== t.id) : [...prev, t.id]))
  }

  return (
    <section id="build" className="relative bg-crust-charcoal px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crust-red-light">
            // 02 — Interactive
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-crust-cream sm:text-5xl">
            Build Your Crust
          </h2>
          <p className="mt-3 max-w-lg font-body text-crust-cream/60">
            Pick your size, pile on the toppings, watch the price (and the pizza) grow.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Preview */}
          <Reveal delay={0.05} className="order-1 lg:order-2">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-crust-black">
              <motion.div
                animate={{ scale: sizeScale[sizeId] }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                className="relative h-[78%] w-[78%]"
              >
                <img
                  src={previewImage}
                  alt="Your pizza build preview"
                  className="h-full w-full rounded-full object-cover shadow-[0_0_60px_rgba(211,56,60,0.25)]"
                />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.span
                  key={sizeId}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-crust-black/80 px-4 py-1.5 font-display text-sm font-semibold text-crust-red-light ring-1 ring-crust-red/40"
                >
                  {size.cm} CM
                </motion.span>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 flex flex-wrap items-start justify-center gap-2 p-4">
                <AnimatePresence>
                  {chosenToppings.map((t, i) => (
                    <motion.span
                      key={t.id}
                      layout
                      initial={{ opacity: 0, y: -14, scale: 0.5 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="rounded-full bg-crust-cream/95 px-2.5 py-1 text-lg shadow-md"
                    >
                      {t.icon}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* Controls */}
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <div>
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-crust-cream/50">
                Step 1 — Choose Size
              </h3>
              <div className="mt-3 flex gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSizeId(s.id)}
                    className={`flex-1 rounded-2xl border px-3 py-3 text-center transition-colors ${
                      s.id === sizeId
                        ? 'border-crust-red bg-crust-red/15 text-crust-cream'
                        : 'border-crust-cream/15 text-crust-cream/60 hover:border-crust-cream/40'
                    }`}
                  >
                    <span className="block font-display text-sm font-semibold">{s.label}</span>
                    <span className="block font-body text-xs opacity-70">{s.cm}cm · ${s.price}</span>
                  </button>
                ))}
              </div>

              <h3 className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.2em] text-crust-cream/50">
                Step 2 — Add Toppings
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
                {toppings.map((t) => {
                  const active = selected.includes(t.id)
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTopping(t)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                        active
                          ? 'border-crust-red bg-crust-red/15'
                          : 'border-crust-cream/15 hover:border-crust-cream/40'
                      }`}
                    >
                      <span className="flex items-center gap-2 font-body text-sm text-crust-cream/85">
                        <span>{t.icon}</span>
                        {t.name}
                      </span>
                      <span className="font-display text-xs font-semibold text-crust-red-light">
                        +${t.price}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-crust-black/60 px-5 py-4">
                <div>
                  <p className="font-body text-xs uppercase tracking-wide text-crust-cream/50">
                    Total Build
                  </p>
                  <p className="font-display text-2xl font-semibold text-crust-cream">
                    <AnimatedPrice value={total} />
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-crust-red px-6 py-3 font-display text-sm font-semibold text-crust-cream shadow-[0_8px_24px_-8px_rgba(211,56,60,0.7)] transition-transform active:scale-95 sm:hover:scale-105"
                >
                  Order Your Crust
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
