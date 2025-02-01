import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
`;

export const SignInBox = styled.div`
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    color: #ff69b4;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

export const Label = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
`;

export const SignInButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #ff1493;
    }
`;
