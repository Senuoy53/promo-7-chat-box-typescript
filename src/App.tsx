import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global-styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="register" element={<RegisterContainer />} />
        </Routes>
      </BrowserRouter>
      {/* Global Style  CSS for styled-components*/}
      <GlobalStyle />
    </>
  );
}

export default App;
