import "./App.css";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Studymodes from "./components/Studymodes";

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <Aboutus />
      <Programs/>
      <Studymodes/>
    </div>
  );
}

export default App;
