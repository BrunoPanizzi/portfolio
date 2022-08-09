import { Container } from './styles'

import Item from '../Item'

export default function Layout() {
  return (
    <Container>
      <Item area="main">
        <h1>Lorem ipsum dolor sit amet consectetur elit. Eligendi</h1>
      </Item>
      <Item area="aaaa" topComponent={<h2>something something</h2>} />
      <Item area="bbbb" />
      <Item area="cccc" />
      <Item area="dddd" />
      <Item area="eeee" />
      <Item area="ffff" />
      <Item area="gggg" />
      <Item area="hhhh" />
      <Item area="iiii" />
      <Item area="jjjj" />
      <Item area="kkkk" />
      <Item area="llll" />
      <Item area="mmmm" />
      <Item area="nnnn" />
      <Item area="oooo" />
      <Item area="pppp" />
      <Item area="qqqq" />
      <Item area="rrrr" />
      <Item area="ssss" />
      <Item area="tttt" />
      <Item area="uuuu" />
      <Item area="vvvv" />
      <Item area="wwww" />
      <Item area="xxxx" />
      <Item area="yyyy" />
      <Item area="zzzz" />
      <Item area="aaa1" />
      <Item area="aaa2" />
    </Container>
  )
}
