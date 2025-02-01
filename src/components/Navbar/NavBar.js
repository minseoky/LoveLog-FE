import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // 햄버거 & 닫기 아이콘 추가
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

    useEffect(() => {
        if (menuRef.current) {
            setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
        }
    }, [isOpen, navItems]); // navItems 변경 시 높이 업데이트

    return (
        <Nav>
            {/* 로고 컨테이너 */}
            <LogoContainer>
                <LogoImage src="lovelog.png" alt="LoveLog Logo" />
                <LogoText>LoveLog</LogoText>
            </LogoContainer>

            {/* 햄버거 버튼 (모바일에서만 표시) */}
            <ToggleButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </ToggleButton>

            {/* 일반 웹: 네비게이션 메뉴 오른쪽 정렬 */}
            <DesktopMenu>
                {navItems.map((item, index) => (
                    <NavButton key={index}>{item}</NavButton>
                ))}
                <TryButton>Try For Free</TryButton>
            </DesktopMenu>

            {/* 모바일 메뉴 */}
            <MobileMenu ref={menuRef} style={{ maxHeight: menuHeight + "px" }} isOpen={isOpen}>
                <NavItems>
                    {navItems.map((item, index) => (
                        <NavButton key={index}>{item}</NavButton>
                    ))}
                    <TryButton>Try For Free</TryButton>
                </NavItems>
            </MobileMenu>
        </Nav>
    );
};

export default Navbar;
