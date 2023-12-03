import BgParticles from './components/BgParticles';
import GoTopBtn from './components/GoTopBtn';
import Contacts from './layout/contacts/Contacts';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import Projects from './layout/projects/Projects';
import Skills from './layout/skills/Skills';

function App() {
  return (
    <div className="App">
      <BgParticles />
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
