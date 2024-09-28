import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Faq from "./pages/Faq";
import { News } from "./pages/News";
import Home from "./pages/home";
import Shop from "./pages/shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/collection' element={<News />} />
            <Route path='/news' element={<News />} />
            <Route path='/faq' element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
