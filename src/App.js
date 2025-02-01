import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 추가

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
