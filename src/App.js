import { GlobalStyle } from "./components/styles/Global";
import NavBar from "./components/Navbar";
import Hero from "./components/hero";
import WhySohbet from "./components/WhySohbet";
import Features from "./components/Features";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <WhySohbet />
      <Features />
    </>
  );
}

export default App;
