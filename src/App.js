import "./App.css";
import { Activities } from "./components/Activities";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Officers } from "./components/Officers";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Officers />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
