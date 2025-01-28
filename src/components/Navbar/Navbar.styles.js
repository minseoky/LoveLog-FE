import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 36px;
    height: 40px;
    margin-right: 0.5rem;
`;

export const LogoText = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff69b4;
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

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
`;

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
`;
