import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AbsoluteContainer = styled(motion.div)`
  position: absolute;
  box-shadow: 0 0 0.5rem rgba(0 0 0 / 0.2);
  border-radius: 0.75rem;
  overflow: hidden;
`

export const Overlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
`
