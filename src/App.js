import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
/*import Service from './components/service/Service';*/
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      
      <Portfolio/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
