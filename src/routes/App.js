import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Stories from "../components/Stories";
import Wines from "../components/Wines";
import Home from "../container/Home";
import Cart from "../container/Cart";
import '../assets/css/App.css'
import UseContexto from "../context/UseContexto";

function App() {
  return (
    <>
      <BrowserRouter> 
      <UseContexto>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/wines" element={<Wines/>}></Route>
            <Route exact path="/stories" element={<Stories/>}></Route>
            <Route exact path="/cart" element={<Cart/>}></Route>
          </Routes>
        </Layout>
        </UseContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
