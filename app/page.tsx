import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ParaQuem from "./components/ParaQuem";
import Idiomas from "./components/Idiomas";
import Metodo from "./components/Metodo";
import Time from "./components/Time";
import Depoimentos from "./components/Depoimentos";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import MotionProvider from "./components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll />
      <Nav />
      <main className="flex-1">
        <Hero />
        <ParaQuem />
        <Idiomas />
        <Metodo />
        <Time />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
    </MotionProvider>
  );
}
