import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  width: 400px;
  margin: auto;
  border: 2px solid #000;
  padding: 20px;
  margin-top : 15rem;
`;

const LoginBar = styled.div`
  background-color: #711BFF;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const LoginInfo = styled.div`
  margin: 20px 0;
  text-align: left;
  color: #767676;
`;

const LockIcon = styled.span`
  margin-right: 10px;
`;

const LoginUp = styled.span`
  margin-left: 170px;
`;


const Board = () => {
  return (
    <LoginBox>
      <p color='#000000'>더 편리해진 Weniv에 오신 것을 환영합니다</p>
      <LoginBar>
        <Logo>Weniv 로그인</Logo>
      </LoginBar>
      <LoginInfo>
        <LockIcon>🔒</LockIcon> 아이디 | 비밀번호 찾기
        <LoginUp>회원가입</LoginUp>
      </LoginInfo>
    </LoginBox>
  );
};

export default Board;
