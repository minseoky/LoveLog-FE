import React from 'react';
import Navbar from "../components/Navbar/NavBar";

const Home = () => {
    const navButtons = ["Home", "Features", "Pricing", "Contact"];

    return (
        <div>
            <Navbar navItems={navButtons} />
            <h1>Welcome to the Home Page!</h1>
        </div>
    );
};

export default Home;
