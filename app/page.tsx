import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ParaQuem from "./components/ParaQuem";
import Idiomas from "./components/Idiomas";
import Metodo from "./components/Metodo";
import Time from "./components/Time";
import Depoimentos from "./components/Depoimentos";
import Campanha from "./components/Campanha";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main className="flex-1">
        <Hero />
        <ParaQuem />
        <Idiomas />
        <Metodo />
        <Time />
        <Depoimentos />
        <Campanha />
      </main>
      <Footer />
    </>
  );
}
