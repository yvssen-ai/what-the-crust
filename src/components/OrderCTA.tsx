import { Reveal } from './Reveal'

export function OrderCTA() {
  return (
    <section id="order" className="relative overflow-hidden bg-crust-charcoal px-5 py-24 sm:px-8 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crust-red animate-glow sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crust-red-light">
            // 04 — Order
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-crust-cream sm:text-6xl">
            Get your <span className="text-crust-red-light">crust</span> on tonight
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-crust-cream/65">
            Order for delivery or pickup, or swing by and watch it come out of the stone oven.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="w-full rounded-full bg-crust-red px-8 py-4 text-center font-display font-semibold text-crust-cream shadow-[0_10px_35px_-10px_rgba(211,56,60,0.8)] transition-transform active:scale-95 sm:w-auto sm:hover:scale-105"
            >
              Order Online
            </a>
            <a
              href="#footer"
              className="w-full rounded-full border border-crust-cream/25 px-8 py-4 text-center font-display font-semibold text-crust-cream transition-colors active:scale-95 sm:w-auto sm:hover:border-crust-cream/60"
            >
              Find Us
            </a>
          </div>

          <p className="mt-8 font-body text-sm text-crust-cream/45">
            Open daily 11:00 — 22:00 · Walk-ins welcome
          </p>
        </Reveal>
      </div>
    </section>
  )
}
