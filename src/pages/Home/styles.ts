import styled from 'styled-components';

export const Prateleira = styled.div`
  padding-top: 25px;  
  padding-bottom: 40px;

  @media (min-width: 1200px) {
    max-width: 1290px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  @media (min-width: 992px) {
    padding-bottom: 70px;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
    position: relative;
    padding-bottom: 26px;

    @media (min-width: 992px) {
      margin-left: 25px;
    }
    
    &:before {
      content: "";
      position: absolute;
      bottom: 15px;
      left: 0;
      display: block;
      width: 65px;
      height: 4px;
      background: #C0C0C0;      
    }    
  }
  
  .swiper-button-next, .swiper-button-prev {
    display: none;

    @media (min-width: 992px) {
      display: block;
    }    
  }
  
  .swiper-container {
    padding-bottom: 30px;
    

    @media (min-width: 992px) {
      padding-left: 25px;
      padding-right: 25px;
    }

    @media (min-width: 992px) {
      padding-bottom: 0;
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next, .swiper-button-prev {
      height: 22px;
      width: 13px;
      
      &:after {
        font-size: 16px;
        color: #000000;        
      }
    }
    
    .swiper-pagination {
      bottom: 0;

      @media (min-width: 992px) {
        display: none;
      }
    }

    .swiper-pagination-bullet {
      background: #BDBDBD;
      opacity: 1;

      &-active {
        background: #F8475F;
      }
    }    
  }
      
  .product {
    @media (min-width: 992px) {
      &:hover {
        .box-info {
          background: #E6E8EA;

          .btn-comprar {
            display: block;
          }
        }
      }
    }

    figure {
      position: relative;
      left: 0;
      top: 0;

      .image-product {        
        align-self: center;
        width: 100%;
      }

      .badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;

        @media (min-width: 992px) {
          width: 81px;
        }
      }      
    }

    .box-info {      
      padding: 7px 5px 15px;
      width: 100%;
      max-width: 216px;
      height: 153px;      
      
      span {
        display: block;
        text-align: center;
      } 
      
      .title-product {
        font-size: 10px;
        line-height: 13px;
        color: #7A7A7A;

        @media (min-width: 992px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      
      .star-ratings {
        display: flex !important;
        justify-content: center;
        margin: 2px 0;
      }
      
      .list-price {
        font-size: 11px;
        line-height: 15px;
        color: #7A7A7A;
        height: 14px;
        margin-bottom: 2px;

        @media (min-width: 992px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      
      .best-price {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #000000;

        @media (min-width: 992px) {
          font-size: 18px;
          line-height: 25px;
        }
      }
      
      .installments {
        font-size: 11px;
        line-height: 15px;
        text-align: center;
        color: #7A7A7A;
        height: 12px;
      }
      
      .btn-comprar {
        background: #000000;
        color: #ffffff;
        border-radius: 5px;
        border: none;        
        text-align: center;
        width: 100%;        
        height: 36px;
        margin: 8px auto 0;
        font-size: 15px;
        line-height: 18px;
        display: block;

        @media (min-width: 992px) {
          display: none;
          width: 125px;
          height: 32px;
        }
      }
      
    }

  }
`;
