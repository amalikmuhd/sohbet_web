import { GlobalStyle } from "./components/styles/Global";
import NavBar from "./components/Navbar";
import Hero from "./components/hero";
import WhySohbet from "./components/WhySohbet";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <WhySohbet />
    </>
  );
}

export default App;
