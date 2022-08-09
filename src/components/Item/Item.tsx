import React, { useState, useLayoutEffect, useRef, useMemo } from 'react'

import delay from '../../utils/delay'
import randomNumber from '../../utils/randomNumber'
import getWindowDimensions from '../../utils/getWindowDimensions'

import { AbsoluteContainer, Container, Overlay } from './styles'

import { dimension } from './types'
import { AnimatePresence } from 'framer-motion'

export interface props {
  area: string
  children?: React.ReactNode
  topComponent?: React.ReactNode
  bottomComponent?: React.ReactNode
}

function getModalPos(): dimension {
  const { width, height } = getWindowDimensions()

  const modalSize = { width: Math.min(width * 0.8, 700), height: height * 0.8 }
  const modalOrigin = {
    x: width / 2 - modalSize.width / 2,
    y: height / 2 - modalSize.height / 2,
  }

  return { ...modalSize, ...modalOrigin }
}

const transition = {
  type: 'spring',
  mass: 1,
  stiffness: 230,
  damping: 23,
}

export default function Item({
  area,
  children,
  topComponent,
  bottomComponent,
}: props) {
  const [loading, setLoading] = useState(true)
  const [dimensions, setDimensions] = useState<dimension>()

  const [isOpen, setIsOpen] = useState(false)

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
    return <Container style={{ gridArea: area }} ref={containerRef} />
  }
  return (
    <>
      <AbsoluteContainer
        onClick={() => setIsOpen(true)}
        transition={{ ...transition }}
        initial={['closed', 'hidden']}
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
        {isOpen && topComponent}
        {children}
        {isOpen && bottomComponent}
      </AbsoluteContainer>

      <AnimatePresence>
        {isOpen && (
          <Overlay
            transition={{ type: 'tween', duration: 0.2 }}
            style={{ background: 'black' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
