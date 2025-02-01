import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
    padding: 20px;
`;

export const SignInBox = styled.div`
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;

    @media (max-width: 480px) {
        width: 100%;
        padding: 30px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    color: #ff69b4;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
    width: 100%;
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
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 12px;
        font-size: 14px;
    }
`;

export const SignInButton = styled.button`
    width: 100%;
    padding: 12px;
    margin: 5px auto;
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

    @media (max-width: 480px) {
        padding: 14px;
        font-size: 14px;
    }
`;

export const SignUpButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: white;
    color: #ff69b4;
    border: 1px solid #ff69b4;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
        background-color: #ff79c4;
        color: white;
    }

    @media (max-width: 480px) {
        padding: 14px;
        font-size: 14px;
    }
`;

// 🌟 소셜 로그인 버튼
export const SocialButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, color 0.3s;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 480px) {
        padding: 14px;
        font-size: 14px;
    }
`;

export const GoogleIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 7px;
`;

export const KakaoIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 7px;
`;

// 🌟 구분선 스타일
export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; /* 중앙 정렬 */
    margin: 20px 0;
    width: 100%;
    position: relative;
`;

// 🌟 구분선 문구 스타일
export const DividerText = styled.span`
    font-size: 14px;
    color: #777;
    background-color: white;
    padding: 0 15px;
    z-index: 1;

    &::before,
    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background-color: #ddd;
    }

    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    gap: 10px; /* 선과 텍스트 간격 */
`;
