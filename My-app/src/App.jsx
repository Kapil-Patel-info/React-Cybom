// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
 import Contact from "./pages/Contact";
 import About from "./pages/About";
 import Home from "./pages/Home";

import './style.css';

const App = () => {
  return (
    <>
     

<h1>welcome to cybrom</h1>
< Home  />
<About />
<Contact />


{/* 
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
        <Route index element={<About />} />

        <Route path="about" index element={<About />} />
          <Route path="home"  element={<Home  name="kapil patel"/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>  */}
    </>
  );
};

export default App;
