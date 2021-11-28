import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .slick-slider {
    
    img {
      width: 100%;
    }
    
    .slick-dots {
      bottom: 35px;

      li {

        &.slick-active {
          button:before {
            opacity: 1;
            color: #F8475F;
          }
        }

        button:before {
          font-size: 10px;
          color: #BDBDBD;
          opacity: 1;
        }
      }
    }
  }
`;