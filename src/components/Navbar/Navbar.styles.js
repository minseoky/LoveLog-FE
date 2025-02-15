import styled from "styled-components";

// 네비게이션 바 전체 스타일 (항상 상단 고정)
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 2px solid #ddd;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
    
    @media (max-width: 768px) {
    height: 50px;
    }
`;

// 로고 컨테이너
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

// 로고 이미지
export const LogoImage = styled.img`
    width: 36px;
    height: 34px;
    margin-right: 0.5rem;
`;

// 로고 텍스트
export const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff69b4;
`;

// 일반 웹에서 네비게이션 메뉴 오른쪽 정렬
export const DesktopMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 2em; /* 네비게이션 메뉴 왼쪽으로 이동 */

    @media (max-width: 768px) {
        display: none;
    }
`;

// 네비게이션 버튼 (일반 웹 & 모바일)
export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`;

// 일반 네비게이션 버튼 (모바일에서는 너비 100%)
export const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    transition: color 0.3s ease;
    width: auto;

    &:hover {
        color: #ff69b4;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 0.75rem 0;
    }
`;

// "Try For Free" 버튼 (모바일에서는 너비 100%)
export const TryButton = styled.button`
    background-color: #ff69b4;
    color: white;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    width: auto;

    &:hover {
        background-color: #ff1493;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`;

// 모바일 메뉴 컨테이너 (하단 여백 추가)
export const MobileMenu = styled.div`
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding-bottom 0.3s ease-out;
    width: 100%;
    position: fixed; /* ✅ 네비바 아래에서 열리도록 고정 */
    top: 72px; /* ✅ 네비게이션 바 아래에서 시작 */
    left: 0;
    background-color: #fff;
    border-bottom: ${({ isOpen }) => (isOpen ? "2px solid #ddd" : "0")};

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
        padding-bottom:  ${({ isOpen }) => (isOpen ? "1em" : "0")};
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

// 모바일에서 햄버거 버튼 (오른쪽 상단 고정)
export const ToggleButton = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff69b4;
    transition: color 0.3s ease;

    position: absolute;
    right: 2.5rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10; /* 리스트보다 위에 위치 */

    &:hover {
        color: #ff1493;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;
