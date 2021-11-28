import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: inline-block;
  padding: 7px 15px 0;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: unset;
  }
  
  .icon-menu {
    display: flex;
    position: absolute;
    left: 10px;
    top: 10px;
    
    @media (min-width: 992px) {
      display: none;
    }
  }

  .logo {
    transition: opacity 0.2s;
    display: block;
    margin: 0 auto 15px;
    width: 110px;

    @media (min-width: 992px) {
      display: unset;
      margin: unset;
      width: unset;
    }
   
    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;     
    }
  }
  
  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }    
  }
  
`;

export const Widgets = styled.div`
  display: inline-flex;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  input {
    width: 100%;    
    border: none;
    border-bottom: 1px solid #7A7A7A;
    
    @media (min-width: 1024px) {
      width: 718px;
    }
  }
  
  button {
    background: none;
    border: none;
  }
`;

export const MyAccount = styled.div`
  display: none;
  align-content: center;

  @media (min-width: 992px) {
    display: inline-flex;
  }
  
  img {
    width: 18px;
  }
  
  span {
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #7A7A7A;
    margin-left: 5px;
  }
  
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  right: 0;
  top: 10px;

  @media (min-width: 992px) {
    position: unset;
    top: unset;
    margin-left: 21px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    img {
      width: 18px;
    }

    span {
      display: inline-block;
      text-align: center;
      font-size: 10px;
      line-height: 14px;
      font-weight: 700;
      color: #ffffff;
      background: #F8475F;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-left: 5px;
    }

    i { 
      display: none;
      
    }
  }
`;
