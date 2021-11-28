import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }
  

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1240px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    width: 100%;
  }

  .col-md-4, .col-md-6 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .d-none {
    display: none !important
  }

  .d-block {
    display: block !important
  }

  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }    
    
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .d-md-block {
      display: block !important
    }

    .d-md-none {
      display: none !important
    }
  }  
`;
