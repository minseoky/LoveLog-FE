import React, { useState } from "react";
import {
    SignInContainer,
    SignInBox,
    InputField,
    SignInButton,
    SocialButton,
    GoogleIcon,
    KakaoIcon,
    Title,
    Label,
    FormGroup,
    SignUpButton,
    Divider, DividerText
} from "./SignIn.styles";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("로그인 시도: ", { email, password });
    };

    const handleGoogleLogin = () => {
        console.log("구글 로그인 시도");
    };

    const handleKakaoLogin = () => {
        console.log("카카오 로그인 시도");
    };

    return (
        <SignInContainer>
            <SignInBox>
                <Title>로그인</Title>
                <form onSubmit={handleSignIn}>
                    <FormGroup>
                        <Label>이메일</Label>
                        <InputField
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>비밀번호</Label>
                        <InputField
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </FormGroup>
                    <SignInButton type="submit">로그인</SignInButton>
                    <SignUpButton>회원가입</SignUpButton>
                </form>

                {/* 구분선과 안내 문구 */}
                <Divider>
                    <DividerText>또는 소셜 로그인으로 간편하게 시작하세요!</DividerText>
                </Divider>

                {/* 소셜 로그인 버튼 */}
                <SocialButton onClick={handleGoogleLogin} style={{ backgroundColor: "#ffffff", color: "#555" }}>
                    <GoogleIcon src="/icons/google-logo.png" alt="Google" />
                    Google 로그인
                </SocialButton>
                <SocialButton onClick={handleKakaoLogin} style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}>
                    <KakaoIcon src="/icons/kakao-logo.png" alt="Kakao" />
                    카카오 로그인
                </SocialButton>
            </SignInBox>
        </SignInContainer>
    );
};

export default SignIn;
