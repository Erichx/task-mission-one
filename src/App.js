import "@fortawesome/fontawesome-free/js/all";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Showcase from "./components/Showcase";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div id="home" className="App">
      <Nav />
      <main>
        <Slider />
        <Showcase />
        <Testimonials />  
        <Gallery /> 
        <Footer /> 
      </main>
    </div>
  );
}

export default App;
