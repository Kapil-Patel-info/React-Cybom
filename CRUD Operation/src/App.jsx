import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Search from "./pages/Search";
import Insert from "./pages/Insert";
import Contact from "./pages/Contact";
import Edit from "./pages/Edit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Display" element={<Display />} />
                    <Route path="Insert" element={<Insert />} />
                    <Route path="Update" element={<Update />} />
                    <Route path="Search" element={<Search />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Edit/:id" element={<Edit />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
