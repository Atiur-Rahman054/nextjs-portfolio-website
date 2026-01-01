
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
