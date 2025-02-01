import React, {useState} from "react";
import {
    SignInContainer,
    SignInBox,
    InputField,
    SignInButton,
    Title,
    Label,
    FormGroup
} from "./SignIn.styles";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("로그인 시도: ", {email, password});
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
                </form>
            </SignInBox>
        </SignInContainer>
    );
};

export default SignIn;
