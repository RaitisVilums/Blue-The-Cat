import "./App.styles.scss";
import About from "./Components/About/about.component";
import Header from "./Components/Header/header.component";
import Home from "./Components/Home/home.component";
import Gallery from "./Components/Gallery/gallery.component";
import Family from "./Components/Family/family.component";
import Footer from "./Components/Footer/footer.component";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Family />
      <Footer />
    </Fragment>
  );
}

export default App;
