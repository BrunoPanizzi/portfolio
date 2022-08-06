import { useState, useLayoutEffect, useRef } from 'react'

import delay from '../../utils/delay'
import randomNumber from '../../utils/randomNumber'
import getWindowDimensions from '../../utils/getWindowDimensions'

import { AbsoluteContainer, Container, Overlay } from './styles'

import { dimension } from './types'

export interface props {
  area: string
  children?: JSX.Element
}

function getModalPos(): dimension {
  const { width, height } = getWindowDimensions()

  const modalSize = { width: Math.min(width * 0.8, 500), height: height * 0.8 }
  const modalOrigin = {
    x: width / 2 - modalSize.width / 2,
    y: height / 2 - modalSize.height / 2,
  }

  return { ...modalSize, ...modalOrigin }
}

const transition = {
  type: 'spring',
  mass: 1,
  stiffness: 210,
  damping: 20,
}

export default function Item({ area, children }: props) {
  const [loading, setLoading] = useState(true)
  const [dimensions, setDimensions] = useState<dimension>()

  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const get = async () => {
      await delay(randomNumber(100, 1000)!)
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
    return <Container style={{ gridArea: area }} ref={containerRef} />
  }
  return (
    <>
      <AbsoluteContainer
        onClick={() => setIsOpen(true)}
        transition={transition}
        animate={
          isOpen
            ? {
                ...getModalPos(),
                zIndex: 2,
              }
            : {
                ...dimensions,
                zIndex: 0,
                transition: {
                  zIndex: {
                    delay: 1,
                  },
                  ...transition,
                },
              }
        }
      >
        {children}
      </AbsoluteContainer>

      {isOpen && (
        <Overlay
          transition={{ type: 'tween' }}
          animate={{ background: 'rgba(0,0,0,0.3)' }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
