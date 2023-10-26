import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import DetailCourt from "./features/DetailCourt/DetailCourt";
import Login from "./features/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        **
        <Route path="/:id" element={<DetailCourt />} />
        **
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<h1>404 pagina no encontrada</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
