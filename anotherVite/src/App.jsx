import "./App.css";

import FooterApp from "./FooterApp";
import HeroApp from "./HeroApp";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <div id="titleContainer">
        <h1 id="title">My App</h1>
      </div>
      <Navigation />
      <HeroApp />
      <FooterApp />
    </>
  );
}

export default App;
