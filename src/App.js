import "./App.scss";

import Header from "./components/Header";
import Readme from "./components/Readme";
import Skills from "./components/Skills/index";
import LinksWrapper from "./components/Links/LinksWrapper";
import Career from "./components/Career";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <LinksWrapper>
        <Readme />
      </LinksWrapper>
      <Skills/>
      <div className="career-education">
        <Career/>
        <Education/>
      </div>
    </div>
  );
}

export default App;
