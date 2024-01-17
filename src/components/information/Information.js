import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import mainPageCat from '../../images/cat1.jpg';

const MainPageStyle = createGlobalStyle`
  body {
    background-color: #FFFFFF;
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

const Information = () => {
    return (
        <>
          <MainPageStyle />
          <MainContainer>
                <LeftContent>
                <CatImage src={mainPageCat} alt="고양이 그림" />
                </LeftContent>
                <RightContent>
                <LargeText>
                    Lorem Ipsum is simply
                    dummy text of the printing 
                    and dummy text
                  </LargeText>
                  <SmallText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting 
                  ndustry. 
                  </SmallText>
                </RightContent>
          </MainContainer>
        </>
      );
  };
  
  export default Information;