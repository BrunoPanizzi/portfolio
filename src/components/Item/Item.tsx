import { Container } from './styles'

interface props {
  area: string
}

export default function Item({ area }: props) {
  return (
    <Container style={{ gridArea: area }}>
      <p>Item</p>
    </Container>
  )
}
