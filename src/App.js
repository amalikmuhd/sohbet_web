import { GlobalStyle } from "./components/styles/Global";
import NavBar from "./components/Navbar";
import Hero from "./components/hero";
import WhySohbet from "./components/WhySohbet";
import Features from "./components/Features";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <WhySohbet />
      <Features />
      <Footer />
    </>
  );
}

export default App;
