import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Ross Portfolio</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
