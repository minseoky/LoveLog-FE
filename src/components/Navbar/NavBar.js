import React from "react";
import {
    Nav,
    LogoContainer,
    LogoImage,
    LogoText,
    NavItems,
    NavButton,
    TryButton,
} from "./Navbar.styles";

const Navbar = ({ navItems }) => {
    return (
        <Nav>
            {/* 왼쪽 로고 및 제목 */}
            <LogoContainer>
                <LogoImage src="lovelog.png" alt="LoveLog Logo"/>
                <LogoText>LoveLog</LogoText>
            </LogoContainer>

            {/* 네비게이션 버튼 */}
            <NavItems>
                {navItems.map((item, index) => (
                    <NavButton key={index}>{item}</NavButton>
                ))}

                {/* Try For Free 버튼 */}
                <TryButton>Try For Free</TryButton>
            </NavItems>
        </Nav>
    );
};

export default Navbar;
