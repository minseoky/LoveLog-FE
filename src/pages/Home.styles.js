import styled from "styled-components";

export const HeroSection = styled.section`
    text-align: center;
    padding: 50px 20px 50px;
    background-color: #FFEEF2;
    border-radius: 20px;
    margin: 100px auto 20px;
    max-width: 800px;

    @media (max-width: 768px) {
        padding: 30px 20px 30px;
        margin: 100px auto 10px;
    }
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: #FF69B4;
    margin-bottom: 10px;
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
`;

export const CTAButton = styled.button`
    background-color: #FF69B4;
    color: white;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    
    &:hover {
        background-color: #FF1493;
    }
`;

export const FeaturesSection = styled.section`
    padding: 50px 20px;
    text-align: center;
`;

export const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;

export const FeatureItem = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
    font-size: 1rem;
    color: #444;
`;

export const FooterCTA = styled.div`
    text-align: center;
    padding: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #FF69B4;
`;
