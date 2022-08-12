import styled from 'styled-components'

import { Container } from './styles'

import Item from '../Item'

export default function Layout() {
  return (
    <Container>
      <Item
        area="main"
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingInline: 32,
        }}
      >
        <MainContent>
          <span>Olá! Eu sou</span>
          <h1>Bruno Panizzi</h1>
          <span>e esse é meu portifólio</span>
        </MainContent>
        <MainContent>Clique nos cards e descubra mais!</MainContent>
      </Item>

      <Item
        area="aaaa"
        topComponent={<h2>something something</h2>}
        bottomComponent={
          <h3>more content in here too look this is a footer!</h3>
        }
      >
        <h1>hello this is the middle component</h1>
      </Item>
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

const MainContent = styled.div`
  font-size: 2rem;
  font-weight: 600;

  h1 {
    font-size: 1.75em;
    font-weight: 700;
    font-family: 'Inconsolata', monospace;
  }
`
