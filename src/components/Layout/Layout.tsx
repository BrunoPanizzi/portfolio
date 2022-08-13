import styled from 'styled-components'

import github from '../../assets/images/GitHub_Logo.png'
import linkedin from '../../assets/images/linkedin.png'
import dark from '../../assets/images/darkMode.svg'
import light from '../../assets/images/lightMode.svg'

import { Container } from './styles'

import Item from '../Item'

export default function Layout() {
  return (
    <Container>
      <Item // main
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
      <Item // theme
        area="eeee"
        style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}
        topComponent={
          <h3
            style={{ fontSize: 22, fontWeight: 500, marginBlockEnd: '1.5rem' }}
          >
            Atualmente no tema: <strong>claro</strong>
          </h3>
        }
      >
        {
          <div style={{ height: 'min(100%, 5rem)', aspectRatio: '1' }}>
            <img
              src={'light' === 'light' ? light : dark}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        }
      </Item>
      <Item area="ffff" />
      <Item area="gggg" />
      <Item // github
        area="hhhh"
        style={{ justifyContent: 'center', alignItems: 'center' }}
        bottomComponent={
          <div
            style={{
              marginBlockStart: '2rem',
              textAlign: 'center',
              fontSize: '1.25rem',
            }}
          >
            <h2>Quer ver o código dos meus projetos?</h2>
            <p>
              Aqui está meu{' '}
              <a href="https://github.com/BrunoPanizzi" target="_blank">
                github!
              </a>
            </p>
          </div>
        }
      >
        <img src={github} style={{ width: 'min(90%, 15rem)' }} />
      </Item>
      <Item area="iiii" />
      <Item area="jjjj" />
      <Item area="kkkk" />
      <Item area="llll" />
      <Item area="mmmm" />
      <Item // linkedin
        area="nnnn"
        style={{ justifyContent: 'center', alignItems: 'center', padding: 6 }}
        bottomComponent={
          <div
            style={{
              marginBlockStart: '2rem',
              textAlign: 'center',
              fontSize: '1.25rem',
            }}
          >
            <h2>Quer ver mais sobre a minha vida profissional? </h2>
            <p>
              Aqui está meu{' '}
              <a
                href="https://www.linkedin.com/in/brunopanizzi"
                target="_blank"
              >
                linkedin!
              </a>
            </p>
          </div>
        }
      >
        <img src={linkedin} style={{ height: 'min(90%, 5rem)' }} />
      </Item>
      <Item area="oooo">asdfk</Item>
      <Item area="pppp">alksjdf</Item>
      <Item area="qqqq" />
      <Item area="rrrr" />
      <Item area="ssss">ksjdfkjd</Item>
      <Item area="tttt" />
      <Item area="uuuu" />
      <Item area="vvvv" />
      <Item area="wwww" />
      <Item area="xxxx">alskdjlkdjf</Item>
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
