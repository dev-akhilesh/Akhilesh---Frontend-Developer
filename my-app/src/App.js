import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Introduction } from "./Components/Introduction";
import { IDO } from "./Components/IDO";
import { Tokenomics } from "./Components/Tokenomics";
import { FAQ } from "./Components/FAQ";
import { Footer } from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <IDO />
      <Tokenomics />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
