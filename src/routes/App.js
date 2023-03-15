import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Stories from "../components/Stories";
import Team from "../components/Team";
import Wines from "../components/Wines";
import Home from "../container/Home";
import '../assets/css/App.css'

function App() {
  return (
    <>
      <BrowserRouter> 
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/team" element={<Team/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/wines" element={<Wines/>}></Route>
            <Route exact path="/stories" element={<Stories/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
