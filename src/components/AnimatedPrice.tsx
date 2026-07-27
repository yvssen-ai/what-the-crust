import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function AnimatedPrice({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(value)
  const spring = useSpring(motionValue, { stiffness: 220, damping: 26 })

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `$${latest.toFixed(0)}`
    })
  }, [spring])

  return (
    <span ref={ref} className={className}>
      ${value.toFixed(0)}
    </span>
  )
}
