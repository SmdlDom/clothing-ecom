import styled from 'styled-components';
import CustomButton from "../../common/custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {  
    width: 40vw;
    border: 2px solid black;
 }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
 
  @media screen and (min-width: 768px) {
    ${CollectionItemContainer}:hover & {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 768px) {
    ${CollectionItemContainer}:hover & {
      cursor: pointer;
    }
  }
`;

export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
    
  @media screen and (min-width: 768px) {
    ${CollectionItemContainer}:hover & {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 768px) {
      display: block;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: center;
    border-top: 2px solid black;
  }
`;

export const PriceContainer = styled.span`
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;