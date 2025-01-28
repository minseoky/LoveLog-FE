import styled from "styled-components";

// 네비게이션 바 전체 스타일
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
`;

// 로고 컨테이너
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

// 로고 이미지
export const LogoImage = styled.img`
    width: 36px;
    height: 40px;
    margin-right: 0.5rem;
`;

// 로고 텍스트
export const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff69b4;
`;

// 네비게이션 버튼 컨테이너
export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`;

// 일반 네비게이션 버튼
export const NavButton = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #ff69b4;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        padding: 0.5rem 0;
    }
`;

// "Try For Free" 버튼
export const TryButton = styled.button`
    background-color: #ff69b4;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff1493;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 0.75rem;
    }
`;
