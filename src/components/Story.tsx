import { Reveal, StaggerGroup, staggerItem } from './Reveal'
import { Counter } from './Counter'
import { stats } from '../data/menu'
import storyImage from '../assets/images/whatthecrust3.jpg'
import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-crust-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal y={40} className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={storyImage}
              alt="Fresh margherita pizza, made the What The Crust way"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crust-black/50 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-4 rounded-2xl bg-crust-red px-5 py-4 shadow-xl sm:-right-8"
          >
            <p className="font-display text-2xl font-bold text-crust-cream">450°C</p>
            <p className="font-body text-xs text-crust-cream/80">stone oven heat</p>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crust-red-light">
              // 03 — Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-crust-cream sm:text-5xl">
              Stone. Fire. Crust.
            </h2>
            <p className="mt-4 font-body text-crust-cream/65">
              What The Crust started with one question: why does "quick pizza" have to mean
              "forgettable pizza"? So we built a screaming-hot stone oven, sourced dough we
              actually proof for a full day, and topped it with stuff we'd want to eat ourselves.
              No shortcuts, no soggy middles — just great days deserve great pizza.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-display text-3xl font-bold text-crust-red-light sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-body text-sm text-crust-cream/55">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
