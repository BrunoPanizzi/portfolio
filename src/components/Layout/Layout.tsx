import styled from 'styled-components'

import github from '../../assets/images/GitHub_Logo.png'
import linkedin from '../../assets/images/linkedin.png'
import dark from '../../assets/images/darkMode.svg'
import light from '../../assets/images/lightMode.svg'
import jstack from '../../assets/images/jstack.svg'
import br from '../../assets/images/brFlag.svg'
import us from '../../assets/images/usFlag.svg'
import MyContactsLogo from '../../assets/images/MyContacts.svg'

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
        doesOpen={false}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2>
          Não gostou do estilo do site? Aqui está meu{' '}
          <a href="https://youtube.com">currículo.</a>
        </h2>
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
      <Item
        area="pppp"
        style={{ justifyContent: 'center', alignItems: 'center', padding: 8 }}
        topComponent={
          <h3
            style={{ fontSize: 22, fontWeight: 500, marginBlockEnd: '1.5rem' }}
          >
            Atual: <strong>português</strong>
          </h3>
        }
        bottomComponent={
          <h3
            style={{
              fontSize: 22,
              fontWeight: 500,
              marginBlockStart: '1.5rem',
            }}
          >
            Para mudar de linguagem clique na bandeira
          </h3>
        }
      >
        {
          <div style={{ height: 'min(100%, 5rem)', aspectRatio: '4 / 3' }}>
            <img
              src={'br' === 'br' ? br : us}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 6,
              }}
            />
          </div>
        }
      </Item>
      <Item area="qqqq" />
      <Item area="rrrr" />
      <Item
        area="ssss"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBlock: 8,
          paddingInline: '15%',
        }}
        bottomComponent={
          <>
            <p style={{ fontSize: '1.25rem', paddingBlockStart: '1.5rem' }}>
              O JStack é um curso para desenvolvedores fullstack, nele trata-se
              de diversas tecnologias como React, NodeJS, express, Postgress,
              Next, entre outras.
            </p>
            <p
              style={{
                fontSize: '1.25rem',
                width: '100%',
                paddingBlockStart: '1rem',
              }}
            >
              Para mais informações acesse o link do{' '}
              <a href="https://jstack.com.br/">JStack</a>{' '}
            </p>
          </>
        }
      >
        <img
          src={jstack}
          alt="Jstack"
          style={{
            height: 'min(5rem, 100%)',
          }}
        />
      </Item>
      <Item area="tttt" />
      <Item area="uuuu" />
      <Item area="vvvv" />
      <Item area="wwww" />
      <Item area="xxxx">alskdjlkdjf</Item>
      <Item area="yyyy" />
      <Item area="zzzz" />
      <Item
        area="aaa1"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBlock: 6,
          gap: 32,
        }}
        bottomComponent={
          <div
            style={{
              maxWidth: '90%',
              fontSize: 18,
              lineHeight: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <p>
              O MyContacts é um projeto desenvolvido no curso JStack. A
              interface foi desenvolvida com React e styledComponents; já o
              backend é uma API rest em JavaScript feita com Express e Postgress
              para o banco de dados.
            </p>
            <p>
              No app você pode criar, editar e excluir contatos, além de poder
              pesquisar entre seus contatos pelo nome e ainda escolher entre
              ordem alfabética ascendente ou descendente.
            </p>
            <p>
              Para acessar o site finalizado, segue o link: ainda não
              disponivel.
            </p>
            <p>
              O código fonte do projeto, frontend e backend:{' '}
              <a href="https://github.com/BrunoPanizzi/MyContactsFront">
                github
              </a>
            </p>
          </div>
        }
      >
        <img src={MyContactsLogo} style={{ height: 'min(80%, 4rem)' }} />
      </Item>
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
