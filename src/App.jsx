import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Banner from "./pages/Banner";
import BusinessImpact from "./pages/BusinessImpact";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Solutions />
      <BusinessImpact />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
