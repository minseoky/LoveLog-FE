import React from 'react';
import Navbar from "../components/Navbar/NavBar";
import { HeroSection, Title, Subtitle, CTAButton, FeatureContainer, FeatureItem, FeaturesSection, FooterCTA } from "./Home.styles";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navItems = [
        { label: "기능 및 이용방법", path: "/features" },
        { label: "개발자와 소통하기", path: "/contact" }
    ];
    const navigate = useNavigate();

    return (
        <div>
            <Navbar navItems={navItems} />
            <HeroSection>
                <Title>우리의 사랑을 기록하는 <br/> 가장 특별한 공간</Title>
                <Subtitle>둘만의 소중한 순간을 기록하고, 다시 떠올리세요 💖</Subtitle>
                <CTAButton onClick={() => navigate("/signin")}>추억 남기러 가기</CTAButton>
            </HeroSection>

            <FeaturesSection>
                <FeatureContainer>
                    <FeatureItem>
                        📸 <strong>추억 기록</strong><br />
                        사진과 글을 통해 특별한 순간을 남겨보세요.
                    </FeatureItem>
                    <FeatureItem>
                        🗺 <strong>데이트 장소 저장</strong><br />
                        함께한 곳을 지도에 기록하고 추억을 공유하세요.
                    </FeatureItem>
                    <FeatureItem>
                        🔥 <strong>특별한 이벤트</strong><br />
                        기념일, 선물, 약속을 관리할 수 있어요.
                    </FeatureItem>
                </FeatureContainer>
            </FeaturesSection>

            <FooterCTA>지금 바로 LoveLog로 특별한 순간을 기록하세요! 🎉</FooterCTA>
        </div>
    );
};

export default Home;
