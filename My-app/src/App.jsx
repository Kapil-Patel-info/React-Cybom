import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Insert from "./Pages/Insert";
import Search from "./Pages/Search";
import Display from "./Pages/Display";
import Edit from "./Pages/Edit";
import Update from "./Pages/Update";

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Insert" element={<Insert />} />
        <Route path="Search" element={<Search />} />
        <Route path="Display" element={<Display />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="Update" element={<Update />} />
      </Route>
    </Routes>
  </BrowserRouter>
  
    
  );
};

export default App;
