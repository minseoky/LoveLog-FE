import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 추가
import { AppContainer } from "./App.styles"; // App 스타일 가져오기

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
