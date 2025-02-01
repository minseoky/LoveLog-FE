import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
    Nav,
    LogoContainer,
    LogoImage,
    LogoText,
    NavItems,
    NavButton,
    TryButton,
    ToggleButton,
    MobileMenu,
    DesktopMenu
} from "./Navbar.styles";

const Navbar = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (menuRef.current) {
            setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
        }
    }, [isOpen, navItems]);

    return (
        <Nav>
            <LogoContainer onClick={() => navigate("/")}>
                <LogoImage src="lovelog.png" alt="LoveLog Logo" />
                <LogoText>LoveLog</LogoText>
            </LogoContainer>

            {/* 햄버거 버튼 (모바일에서만 표시) */}
            <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </ToggleButton>

            {/* 일반 웹: 네비게이션 메뉴 */}
            <DesktopMenu>
                {navItems.map((item, index) => (
                    <NavButton key={index} onClick={() => navigate(item.path)}>
                        {item.label}
                    </NavButton>
                ))}
                <TryButton onClick={() => navigate("/signin")}>
                    로그인
                </TryButton>
            </DesktopMenu>

            {/* 모바일 메뉴 */}
            <MobileMenu ref={menuRef} style={{ maxHeight: menuHeight + "px" }} isOpen={isOpen}>
                <NavItems>
                    {navItems.map((item, index) => (
                        <NavButton key={index} onClick={() => { navigate(item.path); setIsOpen(false); }}>
                            {item.label}
                        </NavButton>
                    ))}
                    <TryButton onClick={() => { navigate("/signin"); setIsOpen(false); }}>
                        로그인
                    </TryButton>
                </NavItems>
            </MobileMenu>
        </Nav>
    );
};

export default Navbar;
