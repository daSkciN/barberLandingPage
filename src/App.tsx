import { useState } from "react";
import "./index.css";
import { Hero } from "./sections/hero";
import { Header } from "./sections/header";
import { About } from "./sections/about";
import { Services } from "./sections/services";
import { Gallery } from "./sections/gallery";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Testimonials } from "./sections/testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
