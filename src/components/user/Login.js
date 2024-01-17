import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  width: 400px;
  margin: auto;
  border: 2px solid #000;
  padding: 20px;
`;

const LoginBar = styled.div`
  background-color: purple;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const LoginInfo = styled.div`
  margin: 20px 0;
  text-align: right;
`;

const LockIcon = styled.span`
  margin-right: 10px;
`;

const LoginButton = styled.button`
  background-color: purple;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  background-color: white;
  color: purple;
  padding: 10px;
  width: 100%;
  border: 1px solid purple;
  margin-top: 10px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginBox>
      <LoginBar>
        <Logo>Weniv 로그인</Logo>
      </LoginBar>
      <p>더 편리해진 Weniv에 오신 것을 환영합니다</p>
      <LoginButton>로그인</LoginButton>
      <SignUpButton>회원가입</SignUpButton>
      <LoginInfo>
        <LockIcon>🔒</LockIcon> 아이디 | 비밀번호 찾기
      </LoginInfo>
    </LoginBox>
  );
};

export default Login;
