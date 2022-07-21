import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../src/pages/Counter";
import Axios from "../src/pages/Axios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/axios" element={<Axios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
