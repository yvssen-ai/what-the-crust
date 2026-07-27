import { useEffect, useRef, useState } from 'react'

type ScrollVideoProps = {
  sources: { src: string; type: string }[]
  poster: string
  className?: string
}

/**
 * Plays only while the page is being scrolled and this video is in view;
 * freezes on the current frame the instant scrolling stops, and loops
 * seamlessly if scrolling carries it past the end.
 */
export function ScrollVideo({ sources, poster, className }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !inView) {
      video.pause()
      return
    }

    let idleTimer: number | undefined

    const playWhileScrolling = () => {
      video.play().catch(() => {})
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(() => video.pause(), 220)
    }

    playWhileScrolling()
    window.addEventListener('scroll', playWhileScrolling, { passive: true })

    return () => {
      window.removeEventListener('scroll', playWhileScrolling)
      window.clearTimeout(idleTimer)
      video.pause()
    }
  }, [inView])

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  )
}
