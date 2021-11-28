import styled from 'styled-components';

export const Container = styled.div`
  background: #F2F2F2;
  padding: 24px 0 20px 0;

  @media (min-width: 992px) {
    text-align: center;
    padding: 24px 0 36px 0;
  }  
  
  h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 16px;
    text-align: left;

    @media (min-width: 992px) {
      text-align: center;
    }
  }
  
`;


export const FormNewsletter = styled.form`
  width: 100%;
  display: block;
  
  @media (min-width: 992px) {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
  }
  
  .form-group {
    margin-bottom: 20px;
    width: 100%;

    @media (min-width: 992px) {
      width: 280px;
      margin-right: 8px;
      margin-bottom: 0;
    }

    input {
      width: 100%;
      border: none;
      border-radius: 5px;
      height: 48px;
      padding: 0 16px;
    }
    
    .error {
      color: #D7182A;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      margin-top: 8px;
      display: block;
      text-align: left;
    }
    
  }
 
  
  button {
    background: #000000;
    border-radius: 5px;
    color: #ffffff;
    text-align: center;
    height: 48px;
    border: none;
    width: 100%;

    @media (min-width: 992px) {
      width: 140px;
    }
  }
`;
