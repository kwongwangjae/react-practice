import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css'
import logo from '../../images/GroupLogo.jpg'

const Logo = styled.img`
    size : 0.5rem;
    background-color: #F2E9D8;
`;


const DownloadButton = styled.button`
  background-color: #D97652;
  color: #FFFFFF;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 1rem;
`;


const Header = () => {
  return (
    <div className="header">
      <div>
        <Logo src={logo} alt='메인 로고 이미지'/>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>
        <Link to="/download">
          <DownloadButton>Download</DownloadButton>
        </Link>
</div>

    </div>
  );
};

export default Header;
