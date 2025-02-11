import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Products from "./components/Products/Products";
import Contacts from "./components/Contacts/Contacts";
import Background from "./components/Background/Background";
import ReportBugButton from "./components/ReportBugButton/ReportBugButton";

function App() {
  return (
    <Router>
      <Background />
      <Header />
      <ReportBugButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
