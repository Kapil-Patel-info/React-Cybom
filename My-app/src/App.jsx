import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Example from "./pages/Example";
import Form from "./pages/Form";
import Show from "./pages/Show";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/"  element={<Layout />}>
          <Route path="Form" element={<Form />} />
          <Route path="Show" element={<Show />} />
          <Route path="Example" element={<Example />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
