import { Reveal } from './Reveal'
import { ScrollVideo } from './ScrollVideo'
import ovenVideoMp4 from '../assets/video/oven-bake.mp4'
import ovenVideoWebm from '../assets/video/oven-bake.webm'
import ovenPoster from '../assets/video/oven-bake-poster.jpg'

export function OvenLoop() {
  return (
    <section className="relative bg-crust-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crust-red-light">
            // Live From The Oven
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-crust-cream sm:text-5xl">
            Scroll to watch it bubble
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 sm:mt-14">
          <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            <ScrollVideo
              sources={[
                { src: ovenVideoMp4, type: 'video/mp4' },
                { src: ovenVideoWebm, type: 'video/webm' },
              ]}
              poster={ovenPoster}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-crust-cream/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
