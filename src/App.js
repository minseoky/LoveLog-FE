import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./pages/SignIn/SignIn"; // 글로벌 스타일 추가

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
