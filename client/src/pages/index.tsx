import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Board } from '../components/Board';

  /*
"/" component

renders the darkmode, the title and the main container

*/

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Board />
    </Main>

    <DarkModeSwitch />
  </Container>
);

export default Index;
