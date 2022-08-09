import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    100deg,
    hsl(222deg 73% 84%) 0%,
    hsl(190deg 35% 69%) 100%
  );
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 0.75rem;
  padding: 0.75rem;

  grid-template-areas:
    'aaaa aaaa bbbb bbbb dddd dddd dddd ffff ffff gggg'
    'aaaa aaaa bbbb bbbb cccc cccc eeee ffff ffff gggg'
    'aaaa aaaa xxxx main main main main hhhh uuuu uuuu'
    'jjjj iiii iiii main main main main vvvv vvvv wwww'
    'jjjj iiii iiii main main main main vvvv vvvv wwww'
    'jjjj kkkk kkkk main main main main zzzz yyyy wwww'
    'jjjj oooo llll main main main main zzzz yyyy nnnn'
    'mmmm mmmm llll main main main main zzzz aaa2 aaa2'
    'mmmm mmmm llll rrrr rrrr tttt tttt zzzz aaa2 aaa2'
    'pppp qqqq qqqq qqqq ssss tttt tttt aaa1 aaa1 aaa1';
`
