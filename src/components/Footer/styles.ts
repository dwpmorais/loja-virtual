import styled from 'styled-components';

export const Container = styled.footer`
  background: #000000;
  padding: 25px 0;
  
  .row {
    width: calc(100% + 30px);
    
    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      width: unset;
    }
  }
  
  h3 {
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    font-weight: bold;
    padding-bottom: 26px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: 15px;
      left: 0;
      display: block;
      width: 45px;
      height: 5px;
      background: #ffffff;
    }
  }
  
  address {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 26px;
    color: #FFFFFF;
  }
  
  button{
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    width: 195px;
    height: 38px; 
    padding: 0 22px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 100%;
    text-transform: uppercase;
    margin: 0 auto;
        
    @media (min-width: 992px) {
      margin-top: 0;
    }

    &:first-child {
      margin-top: 30px;
      margin-bottom: 25px;

      @media (min-width: 992px) {
        margin-top: 0;
      }
    }
    
    &:last-child {
      margin-bottom: 30px;

      @media (min-width: 992px) {
        margin-bottom: 0;
      }      
    }
    
    svg {
      margin-right: 15px;
    }
    
  }

  .selos {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (min-width: 992px) {
      justify-content: end;
    }
    
    .partner {
      display: inline-block;
      flex-direction: column;
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }

      span {
        color: #ffffff;
        display: block;
      }

      img {
        margin-top: 5px;
      }

    }    
  }
  
  
`;
