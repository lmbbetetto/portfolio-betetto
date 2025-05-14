import { Header } from "./components/pages/header/Header";
import { Nav } from "./components/pages/nav/Nav";
import { About } from "./components/pages/about/About";
import { Skils } from "./components/pages/skils/Skils";
import { Experience } from "./components/pages/experience/Experience";
import { Portifolio } from "./components/pages/portfolio/Portifolio";
import { Contact } from "./components/pages/contact/index";
import { Footer } from "./components/pages/footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skils />
      <Portifolio />
      <Contact />
      <Footer />
    </>
  );
}
