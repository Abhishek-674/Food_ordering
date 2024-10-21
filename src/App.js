import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import About from "./component/About";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/about" element={<About/>}/>
       </Routes>
     
    </BrowserRouter>
  );
};
export default App;
