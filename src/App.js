import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Item from "./pages/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="*" element ={<NoPage/>}/> */}
        </Route>
        <Route path="item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
