import "./App.css";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Studymodes from "./components/Studymodes";
import Sucessstor from "./components/Sucessstor";
import Campus from "./components/Campus";
import Dahisar from "./components/Dahisar";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <Aboutus />
      <Programs/>
      <Studymodes/>
      <Sucessstor/>
      <Campus/>
      <Dahisar/>
      <div className="footer">
        <p>Copyright © 2021 Universal High School</p>
      </div>
    </div>
  );
}

export default App;
