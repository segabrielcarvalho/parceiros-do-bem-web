import clsx from "clsx"
import React from "react"

interface GradientProps {
  opacity?: number
  from?: string
  to?: string
  className?: string
  shapeKey?: string | number
  randomShape?: boolean
  zIndex?: number
}

const clipPaths: Record<string, string> = {
  default: 'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
  curve: 'polygon(70% 10%, 100% 50%, 80% 90%, 20% 100%, 0% 70%, 10% 20%, 40% 0%)',
  zigzag: 'polygon(0% 0%, 100% 10%, 80% 50%, 100% 90%, 0% 100%, 20% 60%, 0% 20%)',
  bubble: 'ellipse(70% 60% at 50% 50%)',
  triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
}

const allKeys = Object.keys(clipPaths)

function getZIndexClass(zIndex?: number) {
  if (typeof zIndex !== 'number') return undefined
  const tailwindMap: Record<number, string> = {
    0: 'z-0',
    10: 'z-10',
    20: 'z-20',
    30: 'z-30',
    40: 'z-40',
    50: 'z-50',
    [-10]: '-z-10',
    [-20]: 'z-[-20]',
    [-50]: 'z-[-50]',
    [-100]: 'z-[-100]',
  }
  return tailwindMap[zIndex] || `z-[${zIndex}]`
}

export const Gradient = ({
  opacity = 0.3,
  from = '#ff80b5',
  to = '#9089fc',
  className = '',
  shapeKey,
  randomShape = false,
  zIndex = -10
}: GradientProps) => {
  const key = React.useMemo(() => {
    if (randomShape) {
      return allKeys[Math.floor(Math.random() * allKeys.length)]
    }
    if (shapeKey && clipPaths[shapeKey]) {
      return shapeKey
    }
    return 'default'
  }, [shapeKey, randomShape])

  return (
    <div
      aria-hidden="true"
      className={clsx(
        "absolute top-0 right-0 left-1/2 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48",
        getZIndexClass(zIndex),
        className
      )}
    >
      <div
        style={{
          clipPath: clipPaths[key],
          opacity,
          background: `linear-gradient(to top right, ${from}, ${to})`,
        }}
        className="aspect-801/1036 w-200.25"
      />
    </div>
  )
}
