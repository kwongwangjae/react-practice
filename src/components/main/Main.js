import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import mainPageCat from '../../images/mainPageCat.jpg';

const MainPageStyle = createGlobalStyle`
  body {
    background-color: #F2E9D8;
    margin: 0;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LeftContent = styled.div`
  margin-right: 2rem;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const LargeText = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SmallText = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const DownloadButton = styled.button`
  background-color: #D97652;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const RightContent = styled.div`
  @media (max-width: 768px) {
    order: -1;
    margin-top: 1rem;
  }
`;

const CatImage = styled.img`
  max-width: 100%;
  max-height: 300px; 
`;

const Main = () => {
  return (
    <>
      <MainPageStyle />
      <MainContainer>
            <LeftContent>
              <LargeText>
                Lorem Ipsum is simply
                dummy text of the printing and
              </LargeText>
              <SmallText>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown
              </SmallText>
              <DownloadButton>Download</DownloadButton>
            </LeftContent>
            <RightContent>
              <CatImage src={mainPageCat} alt="고양이 그림" />
            </RightContent>
      </MainContainer>
    </>
  );
};

export default Main;
