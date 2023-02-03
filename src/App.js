import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import Section from './components/sectionDesktop';
import About from './components/about';
import Contact from './components/contact';
const App= () => {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Section />
      <Contact />
    </div>
  );
}

export default App;