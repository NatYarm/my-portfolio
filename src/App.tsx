import Contact from './layout/Contact';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import Projects from './layout/Projects';
import Skills from './layout/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
