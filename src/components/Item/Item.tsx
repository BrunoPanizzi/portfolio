import { CSSProperties, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Overlay } from './styles'
import PositionInGrid from './PositionInGrid'

export interface props {
  area: string
  doesOpen?: boolean
  style?: CSSProperties | ((isOpen: boolean) => CSSProperties)
  children?: React.ReactNode
  topComponent?: React.ReactNode
  bottomComponent?: React.ReactNode
}

export default function Item({
  area,
  doesOpen = true,
  style,
  children,
  topComponent,
  bottomComponent,
}: props) {
  const [isOpen, setIsOpen] = useState(false)

  const finalStyles = typeof style === 'function' ? style(isOpen) : style

  const handleToggleOpen = (value: boolean) => {
    doesOpen && setIsOpen(value)
  }

  return (
    <>
      <PositionInGrid
        area={area}
        onClick={() => handleToggleOpen(true)}
        isOpen={isOpen}
        style={{ display: 'flex', flexDirection: 'column', ...finalStyles }}
      >
        {isOpen && topComponent}
        {children}
        {isOpen && bottomComponent}
      </PositionInGrid>

      <AnimatePresence>
        {isOpen && (
          <Overlay
            transition={{ type: 'tween', duration: 0.2 }}
            style={{ background: 'black' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => handleToggleOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
