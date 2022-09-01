import React, {
  useState,
  useLayoutEffect,
  useRef,
  useMemo,
  CSSProperties,
} from 'react'
import { motion, useTime, useTransform, useMotionTemplate } from 'framer-motion'

import delay from '../../utils/delay'
import randomNumber from '../../utils/randomNumber'
import getWindowDimensions from '../../utils/getWindowDimensions'

import { AbsoluteContainer } from './styles'

import { dimension } from './types'

interface props {
  area: string
  style: CSSProperties
  children: React.ReactNode
  isOpen: boolean
  onClick: () => void
}

const borderWidth = 5
export default function PositionInGrid({
  area,
  style,
  children,
  isOpen,
  onClick,
}: props) {
  const time = useTime()
  const rotate = useTransform(time, [0, 7000], [0, 360], { clamp: false })
  const background = useMotionTemplate`linear-gradient(${rotate}deg, rgba(70,212,207,1) 0%, rgba(204,29,253,1) 63%, rgba(252,176,69,1) 100%)`

  const [loading, setLoading] = useState(true)
  const [dimensions, setDimensions] = useState<dimension>()

  const containerRef = useRef<HTMLDivElement>(null)

  const modalPos = useMemo(getModalPos, [loading])

  useLayoutEffect(() => {
    const get = async () => {
      await delay(randomNumber(200, 1000)!)
      setLoading(false)

      if (containerRef.current) {
        const { height, left, top, width } =
          containerRef.current!.getBoundingClientRect()

        setDimensions({
          width,
          height,
          x: left - 12,
          y: top - 12, // 12 is the padding of the container
        })
      }
    }
    get()
  }, [])

  if (loading) {
    return <div style={{ gridArea: area }} ref={containerRef} />
  }
  return (
    <AbsoluteContainer
      transition={transition}
      style={{
        backgroundImage: background,
      }}
      initial={['hidden', 'closed']}
      animate={['visible', isOpen ? 'open' : 'closed']}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.4,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
        open: {
          ...modalPos,
          zIndex: 2,
          padding: borderWidth,
        },
        closed: {
          ...dimensions,
          zIndex: 0,
          transition: {
            zIndex: {
              delay: 0.2,
            },
            ...transition,
          },
        },
      }}
    >
      <motion.div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '1rem',
          borderRadius: 'inherit',

          ...style,
        }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AbsoluteContainer>
  )
}

// helper function

function getModalPos() {
  const { width, height } = getWindowDimensions()

  const size = { width: Math.min(width * 0.8, 700), height: height * 0.8 }
  const origin = {
    x: width / 2 - size.width / 2,
    y: height / 2 - size.height / 2,
  }

  return { ...size, ...origin }
}

const transition = {
  type: 'spring',
  mass: 1,
  stiffness: 230,
  damping: 23,
}
