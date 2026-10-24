import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";
import AlphaNum from "./pages/AlphaNum";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TextBox from "./components/TextBox";
import NotFound from "./pages/NotFound";
import Counter from "./components/Counter";
import Blog from "./components/Blog";

export const CountContext = createContext(0);

function App() {
   const [count, setCount] = useState(1);
   return (
      <CountContext value={count}>
         <Router> 
            <NavBar/>

            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/alphanum" element={<AlphaNum/>}/>
               <Route path="/textbox" element={<TextBox/>}/>
               <Route path="/blog" element={<Blog  />}/>
               <Route path="/counter" element={<Counter setCount={setCount}/>}/>
               <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
         </Router>
      </CountContext>
   );
}

export default App;
