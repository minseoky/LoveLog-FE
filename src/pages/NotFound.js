import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundContainer, NotFoundTitle, NotFoundMessage, HomeButton } from "./NotFound.styles";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundMessage>길을 잃으셨나요?</NotFoundMessage>
            <p>찾으시는 페이지가 존재하지 않아요. LoveLog에서 특별한 순간을 다시 찾아보세요!</p>
            <p>(아직 미완성된 기능일 수 있어요 😥)</p>
            <HomeButton onClick={() => navigate("/")}>홈으로 가기</HomeButton>
        </NotFoundContainer>
    );
};

export default NotFound;
