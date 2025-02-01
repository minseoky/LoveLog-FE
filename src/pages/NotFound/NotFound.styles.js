import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #FFEEF2;
    padding: 20px;
`;

export const NotFoundTitle = styled.h1`
    font-size: 5rem;
    font-weight: bold;
    color: #FF69B4;
    margin-bottom: 10px;
`;

export const NotFoundMessage = styled.h2`
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 20px;
`;

export const HomeButton = styled.button`
    background-color: #FF69B4;
    color: white;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin-top: 20px;

    &:hover {
        background-color: #FF1493;
    }
`;
