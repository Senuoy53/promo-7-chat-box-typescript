import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global-styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* Global Style  CSS for styled-components*/}
      <GlobalStyle />
    </>
  );
}

export default App;
